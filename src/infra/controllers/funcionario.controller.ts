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
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import FuncionarioDto from 'src/application/dtos/funcionario.dto';
import FuncionarioService from 'src/application/services/funcionario.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import Funcionario from 'src/domain/entities/funcionario.entity';

@Controller('funcionario')
export class FuncionarioController {
  constructor(
    private readonly funcionarioService: FuncionarioService,
    private authService: AuthService,
  ) {}

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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async getFuncionarioById(
    @Param('id') id: string,
  ): Promise<Funcionario | null> {
    const funcionario = await this.funcionarioService.getFuncionarioById(id);

    if (!funcionario) {
      throw new HttpException(
        'Funcionário não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return funcionario;
  }
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
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

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}
