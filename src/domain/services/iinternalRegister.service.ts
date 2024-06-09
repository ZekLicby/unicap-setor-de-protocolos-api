import InternalRegisterDto from 'src/application/dtos/internalRegister';
import { InternalRegister } from '../entities/internalRegister.entity';

interface IRegistroPrimarioService {
  createRegistroPrimario(
    registroPrimarioDto: InternalRegisterDto,
    userId: string,
  ): Promise<InternalRegister>;

  getAllRegistrosPrimarios(): Promise<InternalRegister[]>;

  getRegistroPrimarioById(
    id: string,
  ): Promise<InternalRegister | null> | undefined;

  updateRegistroPrimario(
    id: string,
    registroPrimarioDto: InternalRegisterDto,
  ): Promise<InternalRegister>;

  deleteRegistroPrimario(id: string): Promise<void>;
}

export default IRegistroPrimarioService;
