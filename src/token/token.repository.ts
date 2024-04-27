import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './token.entity';
import Funcionario from 'src/domain/entities/funcionario.entity';
import FuncionarioService from 'src/application/services/funcionario.service';
import { AuthService } from 'src/auth/auth.service';
import ITokenRepository from './itoken.repository';

@Injectable()
export class TokenRepository implements ITokenRepository {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    private readonly _funcionarioService: FuncionarioService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
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
  async update(id: string, hash: string): Promise<void> {
    await this.tokenRepository.update(id, { hash: hash });
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
  async findOneByHash(hash: string): Promise<Token | null> {
    return await this.tokenRepository.findOne({
      where: { hash: hash },
    });
  }
  async findOneByUsername(username: string): Promise<Token | null> {
    return await this.tokenRepository.findOne({
      where: { username: username },
    });
  }
}
