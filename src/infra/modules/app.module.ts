import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from '../../domain/entities/employee.entity';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { InternalRegisterModule } from './internalRegister.module';
import { ExternalRegisterModule } from './externalRegister.module';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';
import { AuthModule } from 'src/auth/auth.module';
dotenv.config();

@Module({
  imports: [
    DatabaseModule,
    InternalRegisterModule,
    ExternalRegisterModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [Funcionario, InternalRegister, ExternalRegister],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
