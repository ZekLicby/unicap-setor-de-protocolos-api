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
import FuncionarioDto from 'src/application/dtos/funcionario.dto';
import FuncionarioService from 'src/application/services/funcionario.service';
import Funcionario from 'src/domain/entities/funcionario.entity';
import IFuncionarioService from 'src/domain/services/ifuncionario.service';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  public async createFuncionario(
    @Body() funcionarioData: FuncionarioDto,
  ): Promise<Funcionario> {
    try {
      const createdFuncionario =
        await this.funcionarioService.createFuncionario(funcionarioData);

      return createdFuncionario;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar criar funcionário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  public async getAllFuncionarios(): Promise<Funcionario[]> {
    try {
      const funcionarios = await this.funcionarioService.getAllFuncionarios();

      return funcionarios;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar listar todos funcionários',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  public async getFuncionarioById(
    @Param('id') id: string,
  ): Promise<Funcionario> {
    const funcionario = await this.funcionarioService.getFuncionarioById(id);

    if (!funcionario) {
      throw new HttpException(
        'Funcionário não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return funcionario;
  }

  @Put(':id')
  public async updateFuncionario(
    @Param('id') id: string,
    @Body() funcionarioData: FuncionarioDto,
  ): Promise<Funcionario> {
    try {
      const updatedFuncionario =
        await this.funcionarioService.updateFuncionario(id, funcionarioData);

      return updatedFuncionario;
    } catch (error) {
      throw new HttpException(
        'Informações do usuário não puderam ser atualizadas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  public async deleteFuncionario(@Param('id') id: string): Promise<void> {
    try {
      await this.funcionarioService.deleteFuncionario(id);
    } catch (error) {
      throw new HttpException(
        'Usuário não pôde ser deletado',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
