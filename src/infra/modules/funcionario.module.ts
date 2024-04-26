import { Module, forwardRef } from '@nestjs/common';
import FuncionarioMapper from 'src/application/mappers/funcionario.mapper';
import FuncionarioService from 'src/application/services/funcionario.service';
import FuncionarioRepository from '../repositories/funcionario.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from 'src/domain/entities/funcionario.entity';
import { FuncionarioController } from '../controllers/funcionario.controller';
import RegistroPrimarioMapper from 'src/application/mappers/registroPrimario.mapper';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Funcionario]),
    forwardRef(() => AuthModule),
  ],
  controllers: [FuncionarioController],
  providers: [
    FuncionarioRepository,
    FuncionarioMapper,
    FuncionarioService,
    RegistroPrimarioMapper,
  ],
  exports: [FuncionarioService],
})
export class FuncionarioModule {}
