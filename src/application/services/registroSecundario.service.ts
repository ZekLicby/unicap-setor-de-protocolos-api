import { Injectable } from '@nestjs/common';
import RegistroSecundarioDto from '../dtos/registroSecundario.dto';
import RegistroSecundarioRepository from 'src/infra/repositories/registroSecundario.repository';
import RegistroSecundarioMapper from '../mappers/registroSecundario.mapper';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';
import IRegistroSecundarioService from 'src/domain/services/iregistroSecundario.service';

@Injectable()
class RegistroSecundarioService implements IRegistroSecundarioService {
  constructor(
    private readonly _registroSecundarioRepository: RegistroSecundarioRepository,
    private readonly _registroSecundarioMapper: RegistroSecundarioMapper,
  ) {}

  public async createRegistroSecundario(
    registroSecundarioDto: RegistroSecundarioDto,
  ): Promise<RegistroSecundario> {
    const registroSecundario = this._registroSecundarioMapper.dtoToEntity(
      registroSecundarioDto,
    );

    return await this._registroSecundarioRepository.create(registroSecundario);
  }

  public async getAllRegistrosSecundarios(): Promise<RegistroSecundario[]> {
    return await this._registroSecundarioRepository.getAll();
  }

  public async getRegistroSecundarioById(
    id: string,
  ): Promise<RegistroSecundario | null> {
    return await this._registroSecundarioRepository.getById(id);
  }

  public async updateRegistroSecundario(
    id: string,
    registroSecundarioDto: RegistroSecundarioDto,
  ): Promise<RegistroSecundario> {
    const registro = this._registroSecundarioMapper.dtoToEntity(
      registroSecundarioDto,
    );

    return await this._registroSecundarioRepository.update(id, registro);
  }

  public async deleteRegistroSecundario(id: string): Promise<void> {
    return this._registroSecundarioRepository.delete(id);
  }
}

export default RegistroSecundarioService;
