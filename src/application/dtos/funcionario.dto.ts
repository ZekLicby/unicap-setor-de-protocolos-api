import { IsDate, IsString } from 'class-validator';

class FuncionarioDto {
  @IsString()
  public id?: string;

  @IsString()
  public nome: string;

  @IsString()
  public cargo: string;

  @IsString()
  public setor: string;

  @IsDate()
  public dataNascimento: Date;

  @IsString()
  public matricula: string;

  @IsString()
  public senhaHash: string;
}

export default FuncionarioDto;
