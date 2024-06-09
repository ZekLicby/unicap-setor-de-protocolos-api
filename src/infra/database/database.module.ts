import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from 'src/domain/entities/employee.entity';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';
import { Token } from 'src/token/token.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [Funcionario, InternalRegister, ExternalRegister, Token],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
