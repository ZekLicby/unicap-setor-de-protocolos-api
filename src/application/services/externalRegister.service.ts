import { Injectable } from '@nestjs/common';
import ExternalRegisterDto from '../dtos/externalRegister';
import ExternalRegisterRepository from 'src/infra/repositories/externalRegister.repository';
import ExternalRegisterMapper from '../mappers/externalRegister.mapper';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';
import IExternalRegisterService from 'src/domain/services/iexternalRegister.service';

@Injectable()
class ExternalRegisterService implements IExternalRegisterService {
  constructor(
    private readonly _externalRegisterRepository: ExternalRegisterRepository,
    private readonly _externalRegisterMapper: ExternalRegisterMapper,
  ) {}

  public async createRegistroSecundario(
    registroSecundarioDto: ExternalRegisterDto,
  ): Promise<ExternalRegister> {
    const registroSecundario = this._externalRegisterMapper.dtoToEntity(
      registroSecundarioDto,
    );

    return await this._externalRegisterRepository.create(registroSecundario);
  }

  public async getAllRegistrosSecundarios(): Promise<ExternalRegister[]> {
    return await this._externalRegisterRepository.getAll();
  }

  public async getRegistroSecundarioById(
    id: string,
  ): Promise<ExternalRegister | null> {
    return await this._externalRegisterRepository.getById(id);
  }

  public async updateRegistroSecundario(
    id: string,
    registroSecundarioDto: ExternalRegisterDto,
  ): Promise<ExternalRegister> {
    const registro = this._externalRegisterMapper.dtoToEntity(
      registroSecundarioDto,
    );

    return await this._externalRegisterRepository.update(id, registro);
  }

  public async deleteRegistroSecundario(id: string): Promise<void> {
    return this._externalRegisterRepository.delete(id);
  }
}

export default ExternalRegisterService;
