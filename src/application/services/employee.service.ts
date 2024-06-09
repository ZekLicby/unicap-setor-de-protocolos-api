import { Injectable } from '@nestjs/common';
import Funcionario from 'src/domain/entities/employee.entity';
import IEmployeeService from 'src/domain/services/iemployee.service';
import EmployeeRepository from 'src/infra/repositories/employee.repository';
import FuncionarioDto from '../dtos/employee';
import EmployeeMapper from '../mappers/employee.mapper';
import * as bcrypt from 'bcrypt';

@Injectable()
class EmployeeService implements IEmployeeService {
  constructor(
    private readonly _employeeRepository: EmployeeRepository,
    private readonly _employeeMapper: EmployeeMapper,
  ) {}

  public async createFuncionario(
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario> {
    const funcionario = this._employeeMapper.dtoToEntity(funcionarioDto);
    funcionario.setPasswordHash = bcrypt.hashSync(funcionarioDto.passwordHash, 8);

    return await this._employeeRepository.create(funcionario);
  }

  public async getAllFuncionarios(): Promise<Funcionario[]> {
    return await this._employeeRepository.getAll();
  }

  public async getFuncionarioById(id: string): Promise<Funcionario | null> {
    return await this._employeeRepository.getById(id);
  }

  public async updateFuncionario(
    id: string,
    funcionarioDto: FuncionarioDto,
  ): Promise<Funcionario> {
    const funcionario = this._employeeMapper.dtoToEntity(funcionarioDto);

    return await this._employeeRepository.update(id, funcionario);
  }

  public async deleteFuncionario(id: string): Promise<void> {
    return await this._employeeRepository.delete(id);
  }
  public async findOne(email: string): Promise<Funcionario | null> {
    return await this._employeeRepository.findOne(email);
  }
}

export default EmployeeService;
