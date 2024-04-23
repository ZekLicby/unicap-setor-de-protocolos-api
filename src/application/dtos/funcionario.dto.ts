import { IsDate, IsEmail, IsString } from 'class-validator';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';
import RegistroPrimarioDto from './registroPrimario.dto';

class FuncionarioDto {
  @IsString()
  public id?: string;

  @IsString()
  public nome: string;

  @IsString()
  public cargo: string;

  @IsEmail()
  public email: string;

  @IsString()
  public setor: string;

  @IsDate()
  public dataNascimento: Date;

  @IsString()
  public matricula: string;

  @IsString()
  public senhaHash: string;

  public registroPrimario: RegistroPrimarioDto | null | undefined;
}

export default FuncionarioDto;
