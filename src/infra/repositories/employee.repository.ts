import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Employee from 'src/domain/entities/employee.entity';
import IEmployeeRepository from 'src/domain/repositories/iemployee.repository';
import { Repository } from 'typeorm';

@Injectable()
class EmployeeRepository implements IEmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private _employeeRepository: Repository<Employee>,
  ) {}

  public async create(funcionario: Employee): Promise<Employee> {
    const createdFuncionario = this._employeeRepository.create(funcionario);

    return await this._employeeRepository.save(createdFuncionario);
  }

  public async getAll(): Promise<Employee[]> {
    return await this._employeeRepository.find({
      relations: ['internalRegister'],
    });
  }

  public async getById(id: string): Promise<Employee | null> {
    return await this._employeeRepository.findOne({
      where: { id },
      relations: ['internalRegister'],
    });
  }

  public async update(
    id: string,
    funcionarioData: Employee,
  ): Promise<Employee> {
    const existingFuncionario = await this.getById(id);

    if (!existingFuncionario) {
      throw new Error('Funcionáio não encontrado.');
    }

    this._employeeRepository.merge(existingFuncionario, funcionarioData);

    return await this._employeeRepository.save(existingFuncionario);
  }

  public async delete(id: string): Promise<void> {
    const deletedFuncionario = await this._employeeRepository.delete(id);

    if (deletedFuncionario.affected === 0) {
      throw new Error('Funcionário não encontrado.');
    }
  }

  async findOne(email: string): Promise<Employee | null> {
    return await this._employeeRepository.findOne({
      where: { email: email },
    });
  }
}

export default EmployeeRepository;
