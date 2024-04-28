import { Injectable } from '@nestjs/common';
import FuncionarioService from 'src/application/services/funcionario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private _funcionarioService: FuncionarioService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async validateFuncionario(email: string, senha: string): Promise<any> {
    const funcionario = await this._funcionarioService.findOne(email);
    if (funcionario && bcrypt.compareSync(senha, funcionario.getSenhaHash)) {
      return funcionario;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.userId };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email);
    return {
      access_token: token,
    };
  }
}
