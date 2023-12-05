import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';

class RegistroPrimarioDto {
  public id: string;
  public RA: string;
  public curso: string;
  public encaminhado: Date;
  public fone: string;
  public orgao: string;
  public notas: string;
  public registroSecundario: RegistroSecundario;
}

export default RegistroPrimarioDto;
