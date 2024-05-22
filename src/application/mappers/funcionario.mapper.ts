import { Injectable } from '@nestjs/common';
import IMapper from './ientity.mapper';
import Funcionario from 'src/domain/entities/funcionario.entity';
import FuncionarioDto from '../dtos/funcionario.dto';
import RegistroPrimarioMapper from './registroPrimario.mapper';
import RegistroSecundarioMapper from './registroSecundario.mapper';

@Injectable()
class FuncionarioMapper implements IMapper<Funcionario, FuncionarioDto> {
  constructor(
    private readonly _registroPrimarioMapper: RegistroPrimarioMapper,
    private readonly _registroSecundarioMapper: RegistroSecundarioMapper,
  ) {}

  public entityToDto(entity: Funcionario): FuncionarioDto {
    const dto = new FuncionarioDto();

    dto.cargo = entity.cargo;
    dto.email = entity.email;
    dto.setor = entity.setor;
    dto.dataNascimento = entity.dataNascimento;
    dto.nome = entity.nome;
    dto.matricula = entity.matricula;

    dto.registroPrimario = entity.registroPrimario
      ? this._registroPrimarioMapper.entityToDto(entity.registroPrimario[0])
      : null;

    dto.registroSecundario = entity.registroSecundario
      ? this._registroSecundarioMapper.entityToDto(entity.registroSecundario[0])
      : null;

    return dto;
  }

  public dtoToEntity(dto: FuncionarioDto): Funcionario {
    const entity = new Funcionario();

    entity.cargo = dto.cargo;
    entity.email = dto.email;
    entity.setor = dto.setor;
    entity.dataNascimento = dto.dataNascimento;
    entity.nome = dto.nome;
    entity.matricula = dto.matricula;

    entity.registroPrimario = dto.registroPrimario
      ? [this._registroPrimarioMapper.dtoToEntity(dto.registroPrimario)]
      : null;

    entity.registroSecundario = dto.registroSecundario
      ? [this._registroSecundarioMapper.dtoToEntity(dto.registroSecundario)]
      : null;

    return entity;
  }
}

export default FuncionarioMapper;
