import RegistroPrimarioDto from 'src/application/dtos/registroPrimario.dto';
import { RegistroPrimario } from '../entities/registroPrimario.entity';

interface IRegistroPrimarioService {
  createRegistroPrimario(
    registroPrimarioDto: RegistroPrimarioDto,
    userId: string,
  ): Promise<RegistroPrimario>;

  getAllRegistrosPrimarios(): Promise<RegistroPrimario[]>;

  getRegistroPrimarioById(
    id: string,
  ): Promise<RegistroPrimario | null> | undefined;

  updateRegistroPrimario(
    id: string,
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario>;

  deleteRegistroPrimario(id: string): Promise<void>;
}

export default IRegistroPrimarioService;
