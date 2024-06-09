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
import ExternalRegisterDto from 'src/application/dtos/externalRegister';
import ExternalRegisterService from 'src/application/services/externalRegister.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';

@Controller('externalRegister')
export class ExternalRegisterController {
  constructor(
    private readonly _externalRegisterService: ExternalRegisterService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createRegistroSecundario(
    @Body() fichaSecundariaData: ExternalRegisterDto,
  ): Promise<ExternalRegister> {
    console.log('ficha', fichaSecundariaData);

    try {
      const createdFichaSecundaria =
        await this._externalRegisterService.createRegistroSecundario(
          fichaSecundariaData,
        );

      return createdFichaSecundaria;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar criar ficha secundária',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAllRegistrosSecundarios(): Promise<ExternalRegister[]> {
    try {
      const registros =
        await this._externalRegisterService.getAllRegistrosSecundarios();

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
  ): Promise<ExternalRegister> {
    const registro =
      await this._externalRegisterService.getRegistroSecundarioById(id);

    if (!registro) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return registro;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async updateRegistroSecundario(
    @Param('id') id: string,
    @Body() registroSecundarioData: ExternalRegisterDto,
  ): Promise<ExternalRegister> {
    try {
      const updatedRegistro =
        await this._externalRegisterService.updateRegistroSecundario(
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async deleteRegistroSecundario(
    @Param('id') id: string,
  ): Promise<void> {
    try {
      const deletedRegistro =
        await this._externalRegisterService.deleteRegistroSecundario(id);
    } catch (error) {
      throw new HttpException(
        'Registro não pôde ser deletado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
