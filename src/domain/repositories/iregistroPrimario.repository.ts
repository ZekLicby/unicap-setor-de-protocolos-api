import { RegistroPrimario } from '../entities/registroPrimario.entity';

interface IRegistroPrimarioRepository {
  create(registro: RegistroPrimario): Promise<RegistroPrimario>;
  getAll(): Promise<RegistroPrimario[]> | any;
  getById(id: string): Promise<RegistroPrimario | null> | undefined;
  update(
    id: string,
    registroPrimarioData: RegistroPrimario,
  ): Promise<RegistroPrimario> | undefined;
  delete(id: string): Promise<void>;
}

export default IRegistroPrimarioRepository;
