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
  UseGuards,
} from '@nestjs/common';
import RegistroPrimarioDto from 'src/application/dtos/registroPrimario.dto';
import RegistroPrimarioService from 'src/application/services/registroPrimario.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';

@Controller('registroPrimario')
export class RegistroPrimarioController {
  constructor(
    private readonly _registroPrimarioService: RegistroPrimarioService,
  ) {}

  // @UseGuards(JwtAuthGuard)
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

  // @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async getRegistroById(
    @Param('id') id: string,
  ): Promise<RegistroPrimario> {
    const registro =
      await this._registroPrimarioService.getRegistroPrimarioById(id);

    if (!registro) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return registro;
  }

  @UseGuards(JwtAuthGuard)
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
    } catch (error) {
      throw new HttpException(
        'Informações do registro não puderam ser atualizadas.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
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
