import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import { RegistroPrimarioController } from '../controllers/registroPrimario.controller';
import RegistroPrimarioRepository from '../repositories/registroPrimario.repository';
import RegistroPrimarioMapper from 'src/application/mappers/registroPrimario.mapper';
import RegistroPrimarioService from 'src/application/services/registroPrimario.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroPrimario])],
  controllers: [RegistroPrimarioController],
  providers: [
    RegistroPrimarioRepository,
    RegistroPrimarioMapper,
    RegistroPrimarioService,
  ],
})
export class RegistroPrimarioModule {}
