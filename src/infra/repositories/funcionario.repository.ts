import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Funcionario from 'src/domain/entities/funcionario.entity';
import IFuncionarioRepository from 'src/domain/repositories/ifuncionario.repository';
import { Repository } from 'typeorm';

@Injectable()
class FuncionarioRepository implements IFuncionarioRepository {
  constructor(
    @InjectRepository(Funcionario)
    private _funcionarioRepository: Repository<Funcionario>,
  ) {}

  public async create(funcionario: Funcionario): Promise<Funcionario> {
    const createdFuncionario = this._funcionarioRepository.create(funcionario);

    return await this._funcionarioRepository.save(createdFuncionario);
  }

  public async getAll(): Promise<Funcionario[]> {
    return await this._funcionarioRepository.find({
      relations: ['registroPrimario'],
    });
  }

  public async getById(id: string): Promise<Funcionario | null> {
    return await this._funcionarioRepository.findOne({
      where: { id },
      relations: ['registroPrimario'],
    });
  }

  public async update(
    id: string,
    funcionarioData: Funcionario,
  ): Promise<Funcionario> {
    const existingFuncionario = await this.getById(id);

    if (!existingFuncionario) {
      throw new Error('Funcionáio não encontrado.');
    }

    this._funcionarioRepository.merge(existingFuncionario, funcionarioData);

    return await this._funcionarioRepository.save(existingFuncionario);
  }

  public async delete(id: string): Promise<void> {
    const deletedFuncionario = await this._funcionarioRepository.delete(id);

    if (deletedFuncionario.affected === 0) {
      throw new Error('Funcionário não encontrado.');
    }
  }

  async findOne(email: string): Promise<Funcionario | null> {
    return await this._funcionarioRepository.findOne({
      where: { email: email },
    });
  }
}

export default FuncionarioRepository;
