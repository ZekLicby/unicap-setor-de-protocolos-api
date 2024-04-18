import { IsDate, IsString } from 'class-validator';

class RegistroPrimarioDto {
  @IsString()
  public id?: string;

  @IsString()
  public RA: string;

  @IsString()
  public curso: string;

  @IsDate()
  public encaminhado: Date;

  @IsString()
  public fone: string;

  @IsString()
  public orgao: string;

  @IsString()
  public notas: string;
}

export default RegistroPrimarioDto;
