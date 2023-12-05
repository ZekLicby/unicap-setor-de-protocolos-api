import RegistroPrimarioDto from 'src/application/dtos/registroPrimario.dto';
import { RegistroPrimario } from '../entities/registroPrimario.entity';

interface IRegistroPrimarioService {
  createRegistroPrimario(
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario>;

  getAllRegistrosPrimarios(): Promise<RegistroPrimario[]>;

  getRegistroPrimarioById(
    id: string,
  ): Promise<RegistroPrimario | null> | undefined;w

  updateRegistroPrimario(
    id: string,
    registroPrimarioDto: RegistroPrimarioDto,
  ): Promise<RegistroPrimario>;

  deleteRegistroPrimario(id: string): Promise<void>;
}

export default IRegistroPrimarioService;
