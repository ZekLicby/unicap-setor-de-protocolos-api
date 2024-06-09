import { Injectable } from '@nestjs/common';
import IMapper from './ientity.mapper';
import Employee from 'src/domain/entities/employee.entity';
import EmployeeDto from '../dtos/employee';
import InternalRegisterMapper from './internalRegister.mapper';
import ExternalRegisterMapper from './externalRegister.mapper';

@Injectable()
class EmployeeMapper implements IMapper<Employee, EmployeeDto> {
  constructor(
    private readonly _internalRegisterMapper: InternalRegisterMapper,
    private readonly _externalRegisterMapper: ExternalRegisterMapper,
  ) {}

  public entityToDto(entity: Employee): EmployeeDto {
    const dto = new EmployeeDto();

    dto.role = entity.role;
    dto.email = entity.email;
    dto.departament = entity.departament;
    dto.birthdate = entity.birthdate;
    dto.name = entity.name;
    dto.registrarionNumber = entity.registrarionNumber;

    dto.internalRegister = entity.internalRegister
      ? this._internalRegisterMapper.entityToDto(entity.internalRegister[0])
      : null;

    dto.externalRegister = entity.externalRegister
      ? this._externalRegisterMapper.entityToDto(entity.externalRegister[0])
      : null;

    return dto;
  }

  public dtoToEntity(dto: EmployeeDto): Employee {
    const entity = new Employee();

    entity.role = dto.role;
    entity.email = dto.email;
    entity.departament = dto.departament;
    entity.birthdate = dto.birthdate;
    entity.name = dto.name;
    entity.registrarionNumber = dto.registrarionNumber;

    entity.internalRegister = dto.internalRegister
      ? [this._internalRegisterMapper.dtoToEntity(dto.internalRegister)]
      : null;

    entity.externalRegister = dto.externalRegister
      ? [this._externalRegisterMapper.dtoToEntity(dto.externalRegister)]
      : null;

    return entity;
  }
}

export default EmployeeMapper;
