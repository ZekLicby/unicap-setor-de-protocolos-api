import { RegistroSecundario } from '../entities/registroSecundario.entity';

interface IRegistroSecundarioRepository {
  create(registro: RegistroSecundario): Promise<RegistroSecundario>;
  getAll(): Promise<RegistroSecundario[]> | any;
  getById(id: string): Promise<RegistroSecundario | null> | undefined;
  update(
    id: string,
    registroSecundarioData: RegistroSecundario,
  ): Promise<RegistroSecundario> | undefined;
  delete(id: string): Promise<void>;
}

export default IRegistroSecundarioRepository;
