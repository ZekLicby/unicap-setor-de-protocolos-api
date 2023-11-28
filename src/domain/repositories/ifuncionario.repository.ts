import { Funcionario } from '../entities/funcionario.entity';

interface IFuncionarioRepository {
  create(funcionario: Funcionario): Promise<Funcionario>;
  getAll(): Promise<Funcionario[]> | any;
  getById(id: string): Promise<Funcionario> | undefined;
  update(
    id: string,
    funcionarioData: Funcionario,
  ): Promise<Funcionario> | undefined;
  delete(id: string): Promise<void>;
}

export default IFuncionarioRepository;
