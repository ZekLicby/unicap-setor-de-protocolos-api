import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';
import IRegistroSecundarioRepository from 'src/domain/repositories/iregistroSecundario.repository';
import { Repository } from 'typeorm';

@Injectable()
class RegistroSecundarioRepository implements IRegistroSecundarioRepository {
  constructor(
    @InjectRepository(RegistroSecundario)
    private readonly _registroSecundarioRepository: Repository<RegistroSecundario>,
  ) {}

  public async create(
    registro: RegistroSecundario,
  ): Promise<RegistroSecundario> {
    const createdRegistroSecundario =
      this._registroSecundarioRepository.create(registro);

    return await this._registroSecundarioRepository.save(
      createdRegistroSecundario,
    );
  }

  public async getAll() {
    return await this._registroSecundarioRepository.find();
  }

  public async getById(id: string): Promise<RegistroSecundario | null> {
    return await this._registroSecundarioRepository.findOne({ where: { id } });
  }

  public async update(
    id: string,
    registroSecundarioData: RegistroSecundario,
  ): Promise<RegistroSecundario> {
    const existingRegistroSecundario = await this.getById(id);

    if (!existingRegistroSecundario) {
      throw new Error('Registro não encontrado.');
    }

    this._registroSecundarioRepository.merge(
      existingRegistroSecundario,
      registroSecundarioData,
    );

    return await this._registroSecundarioRepository.save(
      existingRegistroSecundario,
    );
  }

  public async delete(id: string): Promise<void> {
    const deletedRegistroSecundario =
      await this._registroSecundarioRepository.delete(id);

    if (deletedRegistroSecundario.affected === 0) {
      throw new Error('Registro não encontrado.');
    }
  }
}

export default RegistroSecundarioRepository;
