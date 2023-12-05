import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';

class RegistroSecundarioDto {
  public id: string;
  public tipoDoc: string;
  public notas: string;
  public assuntos: string;
  public registroPor: string;
  public RA: string;
  public curso: string;
  public encaminhado: Date;
  public orgao: string;
  public registroPrimario: RegistroPrimario;
}

export default RegistroSecundarioDto;
