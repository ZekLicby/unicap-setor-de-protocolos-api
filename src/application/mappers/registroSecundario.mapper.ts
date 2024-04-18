import { Injectable } from '@nestjs/common';
import IMapper from './ientity.mapper';
import RegistroSecundarioDto from '../dtos/registroSecundario.dto';
import { RegistroSecundario } from 'src/domain/entities/registroSecundario.entity';

@Injectable()
class RegistroSecundarioMapper
  implements IMapper<RegistroSecundario, RegistroSecundarioDto>
{
  entityToDto(entity: RegistroSecundario): RegistroSecundarioDto {
    const dto = new RegistroSecundarioDto();

    dto.RA = entity.RA;
    dto.curso = entity.curso;
    dto.encaminhado = entity.encaminhado;
    dto.id = entity.id;
    dto.notas = entity.notas;
    dto.orgao = entity.orgao;
    dto.assuntos = entity.assuntos;
    dto.registroPor = entity.registroPor;
    dto.tipoDoc = entity.tipoDoc;

    return dto;
  }

  dtoToEntity(dto: RegistroSecundarioDto): RegistroSecundario {
    const entity = new RegistroSecundario();

    entity.RA = dto.RA;
    entity.curso = dto.curso;
    entity.encaminhado = dto.encaminhado;
    entity.notas = dto.notas;
    entity.orgao = dto.orgao;
    entity.assuntos = dto.assuntos;
    entity.registroPor = dto.registroPor;
    entity.tipoDoc = dto.tipoDoc;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }
}

export default RegistroSecundarioMapper;
