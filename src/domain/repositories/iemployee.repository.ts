import Employee from '../entities/employee.entity';

interface IEmployeeRepository {
  create(funcionario: Employee): Promise<Employee>;
  getAll(): Promise<Employee[]> | any;
  getById(id: string): Promise<Employee | null> | undefined;
  update(
    id: string,
    funcionarioData: Employee,
  ): Promise<Employee> | undefined;
  delete(id: string): Promise<void>;
  findOne(email: string): Promise<Employee | null>;
}

export default IEmployeeRepository;
