import { Injectable } from '@nestjs/common';
import InternalRegisterDto from '../dtos/internalRegister';
import InternalRegisterRepository from 'src/infra/repositories/internalRegister.repository';
import InternalRegisterMapper from '../mappers/internalRegister.mapper';
import IInternalRegisterService from 'src/domain/services/iinternalRegister.service';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';

@Injectable()
class InternalRegisterService implements IInternalRegisterService {
  constructor(
    private readonly _internalRegisterRepository: InternalRegisterRepository,
    private readonly _internalRegisterMapper: InternalRegisterMapper,
  ) {}

  public async createRegistroPrimario(
    registroPrimarioDto: InternalRegisterDto,
    userId: string,
  ): Promise<InternalRegister> {
    const registroPrimario =
      this._internalRegisterMapper.dtoToEntity(registroPrimarioDto);

    return await this._internalRegisterRepository.create(
      registroPrimario,
      userId,
    );
  }

  public async getAllRegistrosPrimarios(): Promise<InternalRegister[]> {
    return await this._internalRegisterRepository.getAll();
  }

  public async getRegistroPrimarioById(
    id: string,
  ): Promise<InternalRegister | null> {
    return await this._internalRegisterRepository.getById(id);
  }

  public async updateRegistroPrimario(
    id: string,
    registroPrimarioDto: InternalRegisterDto,
  ): Promise<InternalRegister> {
    const registro =
      this._internalRegisterMapper.dtoToEntity(registroPrimarioDto);

    return await this._internalRegisterRepository.update(id, registro);
  }

  public async deleteRegistroPrimario(id: string): Promise<void> {
    return this._internalRegisterRepository.delete(id);
  }
}

export default InternalRegisterService;
