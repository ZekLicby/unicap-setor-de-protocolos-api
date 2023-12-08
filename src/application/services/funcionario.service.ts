import { Injectable } from '@nestjs/common';
import Funcionario from 'src/domain/entities/funcionario.entity';
import IFuncionarioService from 'src/domain/services/ifuncionario.service';
import FuncionarioRepository from 'src/infra/repositories/funcionario.repository';
import FuncionarioDto from '../dtos/funcionario.dto';
import FuncionarioMapper from '../mappers/funcionario.mapper';

@Injectable()
class FuncionarioService implements IFuncionarioService {
  constructor(
    private readonly _funcionarioRepository: FuncionarioRepository,
    private readonly _funcionarioMapper: FuncionarioMapper,
  ) {}

  public async createFuncionario(
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario> {
    const funcionario = this._funcionarioMapper.dtoToEntity(funcionarioDto);

    return await this._funcionarioRepository.create(funcionario);
  }

  public async getAllFuncionarios(): Promise<Funcionario[]> {
    return await this._funcionarioRepository.getAll();
  }

  public async getFuncionarioById(id: string): Promise<Funcionario | null> {
    return await this._funcionarioRepository.getById(id);
  }

  public async updateFuncionario(
    id: string,
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario> {
    const funcionario = this._funcionarioMapper.dtoToEntity(funcionarioDto);

    return await this._funcionarioRepository.update(id, funcionario);
  }

  public async deleteFuncionario(id: string): Promise<void> {
    return await this._funcionarioRepository.delete(id);
  }
}

export default FuncionarioService;
