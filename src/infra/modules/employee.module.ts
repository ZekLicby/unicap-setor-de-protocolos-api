import { Module, forwardRef } from '@nestjs/common';
import EmployeeMapper from 'src/application/mappers/employee.mapper';
import EmployeeService from 'src/application/services/employee.service';
import EmployeeRepository from '../repositories/employee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import Employee from 'src/domain/entities/employee.entity';
import { EmployeeController } from '../controllers/employee.controller';
import InternalRegisterMapper from 'src/application/mappers/internalRegister.mapper';
import { AuthModule } from 'src/auth/auth.module';
import ExternalRegister from 'src/application/mappers/externalRegister.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    forwardRef(() => AuthModule),
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeRepository,
    EmployeeMapper,
    EmployeeService,
    InternalRegisterMapper,
    ExternalRegister,
  ],
  exports: [EmployeeService],
})
export class EmployeeModule {}
