import { Injectable } from '@nestjs/common';
import { Funcionario } from 'src/domain/entities/funcionario.entity';
import IFuncionarioService from 'src/domain/services/ifuncionario.service';
import FuncionarioRepository from 'src/infra/repositories/funcionario.repository';
import FuncionarioDto from '../dtos/funcionarioDtos/funcionario.dto';

@Injectable()
class FuncionarioService implements IFuncionarioService {
  constructor(private readonly _funcionarioRepository: FuncionarioRepository) {}

  createFuncionario(funcionarioDto: FuncionarioDto): Promise<Funcionario> {}

  getAllFuncionarios(): Promise<Funcionario[]> {}

  getFuncionarioById(id: string): Promise<Funcionario> {}

  updateFuncionario(
    id: string,
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario> {}

  deleteFuncionario(id: string): Promise<void> {}
}

export default FuncionarioService;
