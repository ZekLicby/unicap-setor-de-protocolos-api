import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';
import { InternalRegisterController } from '../controllers/internalRegister.controller';
import InternalRegisterRepository from '../repositories/internalRegister.repository';
import InternalRegisterMapper from 'src/application/mappers/internalRegister.mapper';
import InternalRegisterService from 'src/application/services/internalRegister.service';
import { JWTUtil } from '../utils/jwt.util';

@Module({
  imports: [TypeOrmModule.forFeature([InternalRegister])],
  controllers: [InternalRegisterController],
  providers: [
    InternalRegisterRepository,
    InternalRegisterMapper,
    InternalRegisterService,
    //JWTUtil,
  ],
})
export class InternalRegisterModule {}
