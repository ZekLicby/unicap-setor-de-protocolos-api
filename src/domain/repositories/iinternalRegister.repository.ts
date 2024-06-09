import { InternalRegister } from '../entities/internalRegister.entity';

interface IInternalRegisterRepository {
  create(registro: InternalRegister, userId: string): Promise<InternalRegister>;
  getAll(): Promise<InternalRegister[]> | any;
  getById(id: string): Promise<InternalRegister | null> | undefined;
  update(
    id: string,
    registroPrimarioData: InternalRegister,
  ): Promise<InternalRegister> | undefined;
  delete(id: string): Promise<void>;
}

export default IInternalRegisterRepository;
