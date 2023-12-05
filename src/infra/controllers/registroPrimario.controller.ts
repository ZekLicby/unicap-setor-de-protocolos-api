import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import RegistroPrimarioDto from 'src/application/dtos/registroPrimario.dto';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import IRegistroPrimarioService from 'src/domain/services/iregristroPrimario.service';

@Controller('registroPrimaria')
export class RegistroPrimarioController {
  constructor(
    private readonly _registroPrimarioService: IRegistroPrimarioService,
  ) {}

  @Post()
  public async createRegistroPrimario(
    @Body() fichaPrimariaData: RegistroPrimarioDto,
  ): Promise<RegistroPrimario> {
    try {
      const createdFichaPrimaria =
        await this._registroPrimarioService.createRegistroPrimario(
          fichaPrimariaData,
        );

      return createdFichaPrimaria;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar criar ficha primaria',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  public async getAllRegistrosPrimarios(): Promise<RegistroPrimario[]> {
    try {
      const registros =
        await this._registroPrimarioService.getAllRegistrosPrimarios();

      return registros;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar listar todos os registros',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  public async getRegistroById(
    @Param('id') id: string,
  ): Promise<RegistroPrimario> {
    const registro = await this._registroPrimarioService.getRegistroPrimarioById(id);

    if (!registro) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return registro;
  }

  @Put(':id')
  public async updateRegistroPrimario(
    @Param('id') id: string,
    @Body() registroPrimarioData: RegistroPrimarioDto,
  ): Promise<RegistroPrimario> {
    try {
      const updatedRegistro =
        await this._registroPrimarioService.updateRegistroPrimario(
          id,
          registroPrimarioData,
        );

      return updatedRegistro;
    } catch (error) {import { Injectable } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { Funcionario } from 'src/domain/entities/funcionario.entity';
    import IFuncionarioRepository from 'src/domain/repositories/ifuncionario.repository';
    import { Repository } from 'typeorm';

    @Injectable()
    class FuncionarioRepository implements IFuncionarioRepository {
      funcionarios = [];

      constructor(
        @InjectRepository(Funcionario)
        private readonly _funcionarioRepository: Repository<Funcionario>,
      ) {}

      public async create(funcionario: Funcionario): Promise<Funcionario> {
        const createdFuncionario =
          this._funcionarioRepository.create(funcionario);

        return await this._funcionarioRepository.save(createdFuncionario);
      }

      public async getAll(): Promise<Funcionario[]> {
        return await this._funcionarioRepository.find();
      }

      public async getById(id: string): Promise<Funcionario | null> {
        return await this._funcionarioRepository.findOne({ where: { id } });
      }

      public async update(
        id: string,
        funcionarioData: Funcionario,
      ): Promise<Funcionario> {
        const existingFuncionario = await this.getById(id);

        if (!existingFuncionario) {
          throw new Error('Funcionáio não encontrado.');
        }

        this._funcionarioRepository.merge(existingFuncionario, funcionarioData);

        return await this._funcionarioRepository.save(existingFuncionario);
      }

      public async delete(id: string): Promise<void> {
        const deletedFuncionario = await this._funcionarioRepository.delete(id);

        if (deletedFuncionario.affected === 0) {
          throw new Error('Funcionário não encontrado.');
        }
      }
    }

    export default FuncionarioRepository;

      throw new HttpException(
        'Informações do registro não puderam ser atualizadas.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  public async deleteRegistroPrimario(@Param('id') id: string): Promise<void> {
    try {
      const deletedRegistro =
        await this._registroPrimarioService.deleteRegistroPrimario(id);
    } catch (error) {
      throw new HttpException(
        'Registro não pôde ser deletado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
