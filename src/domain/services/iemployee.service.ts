import EmployeeDto from 'src/application/dtos/employee';
import Employee from '../entities/employee.entity';

interface IEmployeeService {
  createFuncionario(funcionarioDto: EmployeeDto): Promise<Employee>;

  getAllFuncionarios(): Promise<Employee[]>;

  getFuncionarioById(id: string): Promise<Employee | null> | undefined;

  updateFuncionario(
    id: string,
    funcionarioDto: EmployeeDto,
  ): Promise<Employee>;

  deleteFuncionario(id: string): Promise<void>;

  findOne(email: string): Promise<Employee | null>;
}

export default IEmployeeService;
