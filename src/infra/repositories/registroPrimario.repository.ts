import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import IRegistroPrimarioRepository from 'src/domain/repositories/iregistroPrimario.repository';
import { Repository } from 'typeorm';

@Injectable()
class RegistroPrimarioRepository implements IRegistroPrimarioRepository {
  constructor(
    @InjectRepository(RegistroPrimario)
    private readonly _registroPrimarioRepository: Repository<RegistroPrimario>,
  ) {}

  public async create(registro: RegistroPrimario): Promise<RegistroPrimario> {
    const createdRegistroPrimario =
      this._registroPrimarioRepository.create(registro);

    return await this._registroPrimarioRepository.save(createdRegistroPrimario);
  }

  public async getAll() {
    return await this._registroPrimarioRepository.find({
      relations: ['funcionario'],
    });
  }

  public async getById(id: string): Promise<RegistroPrimario | null> {
    return await this._registroPrimarioRepository.findOne({
      where: { id },
      relations: ['funcionario'],
    });
  }

  public async update(
    id: string,
    registroPrimarioData: RegistroPrimario,
  ): Promise<RegistroPrimario> {
    const existingRegistroPrimario = await this.getById(id);

    if (!existingRegistroPrimario) {
      throw new Error('Registro não encontrado.');
    }

    this._registroPrimarioRepository.merge(
      existingRegistroPrimario,
      registroPrimarioData,
    );

    return await this._registroPrimarioRepository.save(
      existingRegistroPrimario,
    );
  }

  public async delete(id: string): Promise<void> {
    const deletedRegistroPrimario =
      await this._registroPrimarioRepository.delete(id);

    if (deletedRegistroPrimario.affected === 0) {
      throw new Error('Registro não encontrado.');
    }
  }
}

export default RegistroPrimarioRepository;
