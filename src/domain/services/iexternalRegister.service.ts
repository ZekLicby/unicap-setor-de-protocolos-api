import ExternalRegisterDto from 'src/application/dtos/externalRegister';
import { ExternalRegister } from '../entities/externalRegister.entity';

interface IRegistroSecundarioService {
  createRegistroSecundario(
    registroSecundarioDto: ExternalRegisterDto,
  ): Promise<ExternalRegister>;

  getAllRegistrosSecundarios(): Promise<ExternalRegister[]>;

  getRegistroSecundarioById(
    id: string,
  ): Promise<ExternalRegister | null> | undefined;

  updateRegistroSecundario(
    id: string,
    registroSecundarioDto: ExternalRegisterDto,
  ): Promise<ExternalRegister>;

  deleteRegistroSecundario(id: string): Promise<void>;
}

export default IRegistroSecundarioService;
