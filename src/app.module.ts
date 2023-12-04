import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './domain/entities/funcionario.entity';
import { FuncionarioModule } from './infra/modules/funcionario.module';

@Module({
  imports: [
    FuncionarioModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
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
