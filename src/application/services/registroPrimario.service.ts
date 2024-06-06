import { Injectable, NotFoundException } from '@nestjs/common';
import RegistroPrimarioDto from '../dtos/registroPrimario.dto';
import RegistroPrimarioRepository from 'src/infra/repositories/registroPrimario.repository';
import RegistroPrimarioMapper from '../mappers/registroPrimario.mapper';
import IRegistroPrimarioService from 'src/domain/services/iregistroPrimario.service';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import FuncionarioRepository from 'src/infra/repositories/funcionario.repository';
import Funcionario from 'src/domain/entities/funcionario.entity';

@Injectable()
class RegistroPrimarioService implements IRegistroPrimarioService {
  constructor(
    private readonly _registroPrimarioRepository: RegistroPrimarioRepository,
    private readonly _registroPrimarioMapper: RegistroPrimarioMapper,
    private readonly _funcionarioRepository: FuncionarioRepository,
  ) {}

  public async createRegistroPrimario(
    registroPrimarioDto: RegistroPrimarioDto,
    userId: string,
  ): Promise<RegistroPrimario> {
    const funcionario: Funcionario | null =
      await this._funcionarioRepository.getById(userId);

    if (!funcionario) {
      throw new NotFoundException('Funcionário não encontrado');
    }

    const registroPrimario =
      this._registroPrimarioMapper.dtoToEntity(registroPrimarioDto);
    registroPrimario.funcionario = funcionario; // Associar o funcionário ao registro primario

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
