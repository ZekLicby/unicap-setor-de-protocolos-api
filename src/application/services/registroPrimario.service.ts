import { Injectable } from '@nestjs/common';
import IRegistroPrimarioService from 'src/domain/services/iregristroPrimario.service';
import RegistroPrimarioDto from '../dtos/registroPrimario.dto';
import RegistroPrimario from '../mappers/registroPrimario.mapper';
import RegistroPrimarioRepository from 'src/infra/repositories/registroPrimario.repository';
import RegistroPrimarioMapper from '../mappers/registroPrimario.mapper';

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

  public async getAllRegistrosPrimarios(): Promise<RegistroPrimario[]> {}

  public async getRegistroPrimarioById(
    id: string,
  ): Promise<RegistroPrimario | null> | undefined {}

  public async updateRegistroPrimario(
    id: string,
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario> {}

  public async deleteRegistroPrimario(id: string): Promise<void> {}
}

export default RegistroPrimarioService;
