import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';
import { ExternalRegisterController } from '../controllers/externalRegister.controller';
import ExternalRegisterRepository from '../repositories/externalRegister.repository';
import ExternalRegisterMapper from 'src/application/mappers/externalRegister.mapper';
import ExternalRegisterService from 'src/application/services/externalRegister.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalRegister])],
  controllers: [ExternalRegisterController],
  providers: [
    ExternalRegisterRepository,
    ExternalRegisterMapper,
    ExternalRegisterService,
  ],
})
export class ExternalRegisterModule {}
