import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Funcionario from 'src/domain/entities/funcionario.entity';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [Funcionario, RegistroPrimario, RegistroSecundario],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
