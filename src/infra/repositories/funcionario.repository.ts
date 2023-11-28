import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from 'src/domain/entities/funcionario.entity';
import IFuncionarioRepository from 'src/domain/repositories/ifuncionario.repository';
import { Repository } from 'typeorm';

class FuncionarioRepository implements IFuncionarioRepository {
  constructor(
    @InjectRepository(Funcionario)
    private readonly _funcionarioRepository: Repository<Funcionario>,
  ) {}

  create(funcionario: Funcionario): Promise<Funcionario> {
    throw new Error('Method not implemented.');
  }
  getAll() {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Funcionario> | undefined {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    funcionarioData: Funcionario,
  ): Promise<Funcionario> | undefined {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default FuncionarioRepository;
