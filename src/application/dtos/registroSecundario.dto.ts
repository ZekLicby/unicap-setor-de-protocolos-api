import { IsDate, IsString, IsUUID } from 'class-validator';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';

class RegistroSecundarioDto {
  @IsUUID()
  public id?: string;

  @IsString()
  public tipoDoc: string;

  @IsString()
  public notas: string;

  @IsString()
  public assuntos: string;

  @IsString()
  public registroPor: string;

  @IsString()
  public RA: string;

  @IsString()
  public curso: string;

  @IsDate()
  public encaminhado: Date;

  @IsString()
  public orgao: string;

  public registroPrimario: RegistroPrimario;
}

export default RegistroSecundarioDto;
