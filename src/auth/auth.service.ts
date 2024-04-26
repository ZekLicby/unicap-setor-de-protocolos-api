import { Injectable } from '@nestjs/common';
import FuncionarioService from 'src/application/services/funcionario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private _funcionarioService: FuncionarioService) {}

  async validateFuncionario(email: string, senha: string): Promise<any> {
    const funcionario = await this._funcionarioService.findOne(email);
    if (funcionario && bcrypt.compareSync(senha, funcionario.getSenhaHash)) {
      return funcionario;
    }
    return null;
  }
}
