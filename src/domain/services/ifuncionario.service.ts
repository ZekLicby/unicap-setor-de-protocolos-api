import FuncionarioDto from 'src/application/dtos/funcionario.dto';
import { Funcionario } from '../entities/funcionario.entity';

interface IFuncionarioService {
  createFuncionario(funcionarioDto: FuncionarioDto): Promise<Funcionario>;

  getAllFuncionarios(): Promise<Funcionario[]>;

  getFuncionarioById(id: string): Promise<Funcionario | null> | undefined;

  updateFuncionario(
    id: string,
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario>;

  deleteFuncionario(id: string): Promise<void>;
}

export default IFuncionarioService;
