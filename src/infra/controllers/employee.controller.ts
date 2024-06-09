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
import { plainToInstance } from 'class-transformer';
import { Request } from 'express';
import EmployeeDto from 'src/application/dtos/employee';
import EmployeeService from 'src/application/services/employee.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import Employee from 'src/domain/entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly _employeeService: EmployeeService,
    private authService: AuthService,
  ) {}

  @Post()
  public async createFuncionario(
    @Body() funcionarioData: EmployeeDto,
  ): Promise<Employee> {
    try {
      const createdFuncionario =
        await this._employeeService.createFuncionario(funcionarioData);

      return plainToInstance(Employee, createdFuncionario);
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar criar funcionário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAllFuncionarios(): Promise<Employee[]> {
    try {
      const funcionarios = await this._employeeService.getAllFuncionarios();
      return plainToInstance(Employee, funcionarios);
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
  ): Promise<Employee | null> {
    const funcionario = await this._employeeService.getFuncionarioById(id);

    if (!funcionario) {
      throw new HttpException(
        'Funcionário não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return plainToInstance(Employee, funcionario);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async updateFuncionario(
    @Param('id') id: string,
    @Body() funcionarioData: EmployeeDto,
  ): Promise<Employee> {
    try {
      const updatedFuncionario =
        await this._employeeService.updateFuncionario(id, funcionarioData);

      return plainToInstance(Employee, updatedFuncionario);
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
      await this._employeeService.deleteFuncionario(id);
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
