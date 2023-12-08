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
import RegistroSecundarioDto from 'src/application/dtos/registroSecundario.dto';
import RegistroSecundarioService from 'src/application/services/registroSecundario.service';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';

@Controller('registroSecundario')
export class RegistroSecundarioController {
  constructor(
    private readonly _registroSecundarioService: RegistroSecundarioService,
  ) {}

  @Post()
  public async createRegistroSecundario(
    @Body() fichaPrimariaData: RegistroSecundarioDto,
  ): Promise<RegistroSecundario> {
    try {
      const createdFichaPrimaria =
        await this._registroSecundarioService.createRegistroSecundario(
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
  public async getAllRegistrosSecundarios(): Promise<RegistroSecundario[]> {
    try {
      const registros =
        await this._registroSecundarioService.getAllRegistrosSecundarios();

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
  ): Promise<RegistroSecundario> {
    const registro =
      await this._registroSecundarioService.getRegistroSecundarioById(id);

    if (!registro) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return registro;
  }

  @Put(':id')
  public async updateRegistroSecundario(
    @Param('id') id: string,
    @Body() registroSecundarioData: RegistroSecundarioDto,
  ): Promise<RegistroSecundario> {
    try {
      const updatedRegistro =
        await this._registroSecundarioService.updateRegistroSecundario(
          id,
          registroSecundarioData,
        );

      return updatedRegistro;
    } catch (error) {
      throw new HttpException(
        'Informações do registro não puderam ser atualizadas.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  public async deleteRegistroSecundario(
    @Param('id') id: string,
  ): Promise<void> {
    try {
      const deletedRegistro =
        await this._registroSecundarioService.deleteRegistroSecundario(id);
    } catch (error) {
      throw new HttpException(
        'Registro não pôde ser deletado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
