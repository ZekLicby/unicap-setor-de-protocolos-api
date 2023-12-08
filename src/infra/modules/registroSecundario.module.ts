import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';
import { RegistroSecundarioController } from '../controllers/registroSecundario.controller';
import RegistroSecundarioRepository from '../repositories/registroSecundario.repository';
import RegistroSecundarioMapper from 'src/application/mappers/registroSecundario.mapper';
import RegistroSecundarioService from 'src/application/services/registroSecundario.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroSecundario])],
  controllers: [RegistroSecundarioController],
  providers: [
    RegistroSecundarioRepository,
    RegistroSecundarioMapper,
    RegistroSecundarioService,
  ],
})
export class RegistroPrimarioModule {}
