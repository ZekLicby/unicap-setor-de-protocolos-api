import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';
import IExternalRegisterRepository from 'src/domain/repositories/iexternalRegister.repository';
import { Repository } from 'typeorm';

@Injectable()
class ExternalRegisterRepository implements IExternalRegisterRepository {
  constructor(
    @InjectRepository(ExternalRegister)
    private readonly _externalRegisterRepository: Repository<ExternalRegister>,
  ) {}

  public async create(registro: ExternalRegister): Promise<ExternalRegister> {
    const createdRegistroSecundario =
      this._externalRegisterRepository.create(registro);

    return await this._externalRegisterRepository.save(
      createdRegistroSecundario,
    );
  }

  public async getAll() {
    return await this._externalRegisterRepository.find({
      relations: ['employee'],
    });
  }

  public async getById(id: string): Promise<ExternalRegister | null> {
    return await this._externalRegisterRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
  }

  public async update(
    id: string,
    registroSecundarioData: ExternalRegister,
  ): Promise<ExternalRegister> {
    const existingRegistroSecundario = await this.getById(id);

    if (!existingRegistroSecundario) {
      throw new Error('Registro não encontrado.');
    }

    this._externalRegisterRepository.merge(
      existingRegistroSecundario,
      registroSecundarioData,
    );

    return await this._externalRegisterRepository.save(
      existingRegistroSecundario,
    );
  }

  public async delete(id: string): Promise<void> {
    const deletedRegistroSecundario =
      await this._externalRegisterRepository.delete(id);

    if (deletedRegistroSecundario.affected === 0) {
      throw new Error('Registro não encontrado.');
    }
  }
}

export default ExternalRegisterRepository;
