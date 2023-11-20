import { Funcionario } from '../entities/funcionario.entity';

interface IFuncionarioRepository {
  create(funcionario: Funcionario): Promise<Funcionario>;
    
}
