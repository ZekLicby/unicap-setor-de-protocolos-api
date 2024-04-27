import { Injectable } from '@nestjs/common';
import { TokenRepository } from './token.repository';
import Funcionario from 'src/domain/entities/funcionario.entity';

@Injectable()
export class TokenService {
  constructor(private tokenRepository: TokenRepository) {}

  async save(hash: string, username: string) {
    return await this.tokenRepository.save(hash, username);
  }

  async refreshToken(oldToken: string) {
    return await this.tokenRepository.refreshToken(oldToken);
  }

  async getUsuarioByToken(token: string): Promise<Funcionario | null> {
    return await this.tokenRepository.getUsuarioByToken(token);
  }
}
