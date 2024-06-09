import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';
import IInternalRegisterRepository from 'src/domain/repositories/iinternalRegister.repository';
import { Repository } from 'typeorm';

@Injectable()
class RegistroPrimarioRepository implements IInternalRegisterRepository {
  constructor(
    @InjectRepository(InternalRegister)
    private readonly _internalRegisterRepository: Repository<InternalRegister>,
  ) {}

  public async create(
    registro: InternalRegister,
    userId: string,
  ): Promise<InternalRegister> {
    const createdRegistroPrimario =
      this._internalRegisterRepository.create(registro);

    return await this._internalRegisterRepository.save(createdRegistroPrimario);
  }

  public async getAll() {
    return await this._internalRegisterRepository.find({
      relations: ['employee'],
    });
  }

  public async getById(id: string): Promise<InternalRegister | null> {
    return await this._internalRegisterRepository.findOne({
      where: { id },
      relations: ['employee'],
    });
  }

  public async update(
    id: string,
    registroPrimarioData: InternalRegister,
  ): Promise<InternalRegister> {
    const existingRegistroPrimario = await this.getById(id);

    if (!existingRegistroPrimario) {
      throw new Error('Registro não encontrado.');
    }

    this._internalRegisterRepository.merge(
      existingRegistroPrimario,
      registroPrimarioData,
    );

    return await this._internalRegisterRepository.save(
      existingRegistroPrimario,
    );
  }

  public async delete(id: string): Promise<void> {
    const deletedRegistroPrimario =
      await this._internalRegisterRepository.delete(id);

    if (deletedRegistroPrimario.affected === 0) {
      throw new Error('Registro não encontrado.');
    }
  }
}

export default RegistroPrimarioRepository;
