import FuncionarioDto from 'src/application/dtos/funcionarioDtos/funcionario.dto';
import { Funcionario } from '../entities/funcionario.entity';

interface IFuncionarioService {
  createFuncionario(funcionarioDto: FuncionarioDto): Promise<Funcionario>;

  getAllFuncionarios(): Promise<Array<Funcionario>>;

  getFuncionarioById(id: string): Promise<Funcionario | null> | undefined;

  updateFuncionario(
    id: string,
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario>;

  deleteFuncionario(id: string): Promise<void>;
}

export default IFuncionarioService;
