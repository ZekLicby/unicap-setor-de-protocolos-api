import RegistroSecundarioDto from 'src/application/dtos/registroSecundario.dto';
import { RegistroSecundario } from '../entities/registroSecundario.entity';

interface IRegistroSecundarioService {
  createRegistroSecundario(
    registroSecundarioDto: RegistroSecundarioDto,
  ): Promise<RegistroSecundario>;

  getAllRegistrosSecundarios(): Promise<RegistroSecundario[]>;

  getRegistroSecundarioById(
    id: string,
  ): Promise<RegistroSecundario | null> | undefined;

  updateRegistroSecundario(
    id: string,
    registroSecundarioDto: RegistroSecundarioDto,
  ): Promise<RegistroSecundario>;

  deleteRegistroSecundario(id: string): Promise<void>;
}

export default IRegistroSecundarioService;
