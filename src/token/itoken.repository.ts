import Funcionario from 'src/domain/entities/funcionario.entity';
import { Token } from './token.entity';

interface ITokenRepository {
  update(id: string, hash: string): Promise<void>;
  findOneByHash(hash: string): Promise<Token | null>;
  findOneByUsername(username: string): Promise<Token | null>;
  getUsuarioByToken(token: string): Promise<Funcionario | null>;
}

export default ITokenRepository;
