import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import FuncionarioService from 'src/application/services/funcionario.service';
import { AuthService } from 'src/auth/auth.service';
import Funcionario from 'src/domain/entities/funcionario.entity';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private _funcionarioService: FuncionarioService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { username: username },
    });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        username: username,
      });
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { hash: oldToken },
    });
    if (objToken) {
      const usuario = await this._funcionarioService.findOne(objToken.username);
      return this.authService.login(usuario);
    } else {
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUsuarioByToken(token: string): Promise<Funcionario | null> {
    token = token.replace('Bearer ', '').trim();
    const objToken: Token | null = await this.tokenRepository.findOne({
      where: { hash: token },
    });
    if (objToken) {
      const usuario = await this._funcionarioService.findOne(objToken.username);
      return usuario;
    } else {
      return null;
    }
  }
}
