import { Injectable } from '@nestjs/common';
import RegistroPrimarioDto from '../dtos/registroPrimario.dto';
import RegistroPrimarioRepository from 'src/infra/repositories/registroPrimario.repository';
import RegistroPrimarioMapper from '../mappers/registroPrimario.mapper';
import IRegistroPrimarioService from 'src/domain/services/iregristroPrimario.service';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';

@Injectable()
class RegistroPrimarioService implements IRegistroPrimarioService {
  constructor(
    private readonly _registroPrimarioRepository: RegistroPrimarioRepository,
    private readonly _registroPrimarioMapper: RegistroPrimarioMapper,
  ) {}

  public async createRegistroPrimario(
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario> {
    const registroPrimario =
      this._registroPrimarioMapper.dtoToEntity(registroPrimarioDto);

    return await this._registroPrimarioRepository.create(registroPrimario);
  }

  public async getAllRegistrosPrimarios(): Promise<RegistroPrimario[]> {
    return await this._registroPrimarioRepository.getAll();
  }

  public async getRegistroPrimarioById(
    id: string,
  ): Promise<RegistroPrimario | null> {
    return await this._registroPrimarioRepository.getById(id);
  }

  public async updateRegistroPrimario(
    id: string,
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario> {
    const registro =
      this._registroPrimarioMapper.dtoToEntity(registroPrimarioDto);

    return await this._registroPrimarioRepository.update(id, registro);
  }

  public async deleteRegistroPrimario(id: string): Promise<void> {
    return this._registroPrimarioRepository.delete(id);
  }
}

export default RegistroPrimarioService;
