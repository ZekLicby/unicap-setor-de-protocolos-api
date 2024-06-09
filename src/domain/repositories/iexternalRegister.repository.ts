import { ExternalRegister } from '../entities/externalRegister.entity';

interface IExternalRegisterRepository {
  create(registro: ExternalRegister): Promise<ExternalRegister>;
  getAll(): Promise<ExternalRegister[]> | any;
  getById(id: string): Promise<ExternalRegister | null> | undefined;
  update(
    id: string,
    registroSecundarioData: ExternalRegister,
  ): Promise<ExternalRegister> | undefined;
  delete(id: string): Promise<void>;
}

export default IExternalRegisterRepository;
