import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from '../../domain/entities/funcionario.entity';
import { FuncionarioModule } from './funcionario.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
dotenv.config();

@Module({
  imports: [
    FuncionarioModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [Funcionario],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
