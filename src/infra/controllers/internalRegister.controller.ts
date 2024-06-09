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
  Headers,
} from '@nestjs/common';
import InternalRegisterDto from 'src/application/dtos/internalRegister';
import InternalRegisterService from 'src/application/services/internalRegister.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';
import { JWTUtil } from '../utils/jwt.util';

@Controller('internalRegister')
export class InternalRegisterController {
  constructor(
    private readonly _internalRegisterService: InternalRegisterService,
   // private readonly _jwtUtil: JWTUtil,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createRegistroPrimario(
    @Body() fichaPrimariaData: InternalRegisterDto,
    @Headers('Authorization') auth: string,
  ): Promise<InternalRegister> {
    try {
      //const json = this._jwtUtil.decode(auth);
      //const userId = json.uuid;
      const userId = "teste";
      const createdFichaPrimaria =
        await this._internalRegisterService.createRegistroPrimario(
          fichaPrimariaData,
          userId,
        );

      return createdFichaPrimaria;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar criar ficha primaria',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAllRegistrosPrimarios(): Promise<InternalRegister[]> {
    try {
      const registros =
        await this._internalRegisterService.getAllRegistrosPrimarios();

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
  ): Promise<InternalRegister> {
    const registro =
      await this._internalRegisterService.getRegistroPrimarioById(id);

    if (!registro) {
      throw new HttpException('Registro não encontrado', HttpStatus.NOT_FOUND);
    }

    return registro;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async updateRegistroPrimario(
    @Param('id') id: string,
    @Body() registroPrimarioData: InternalRegisterDto,
  ): Promise<InternalRegister> {
    try {
      const updatedRegistro =
        await this._internalRegisterService.updateRegistroPrimario(
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
        await this._internalRegisterService.deleteRegistroPrimario(id);
    } catch (error) {
      throw new HttpException(
        'Registro não pôde ser deletado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
