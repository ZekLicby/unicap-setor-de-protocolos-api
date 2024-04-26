import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FuncionarioModule } from 'src/infra/modules/funcionario.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [FuncionarioModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
