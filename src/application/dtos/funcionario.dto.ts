import { IsDate, IsEmail, IsString } from 'class-validator';
import RegistroPrimarioDto from './registroPrimario.dto';
import RegistroSecundarioDto from './registroSecundario.dto';

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

  public registroSecundario: RegistroSecundarioDto | null | undefined;
}

export default FuncionarioDto;
