import { Injectable } from '@nestjs/common';
import RegistroPrimarioDto from '../dtos/registroPrimario.dto';
import IMapper from './ientity.mapper';
import { RegistroPrimario } from 'src/domain/entities/registroPrimario.entity';

@Injectable()
class RegistroPrimarioMapper
  implements IMapper<RegistroPrimario, RegistroPrimarioDto>
{
  entityToDto(entity: RegistroPrimario): RegistroPrimarioDto {
    const dto = new RegistroPrimarioDto();

    dto.RA = entity.RA;
    dto.curso = entity.curso;
    dto.encaminhado = entity.encaminhado;
    dto.fone = entity.fone;
    dto.id = entity.id;
    dto.notas = entity.notas;
    dto.orgao = entity.orgao;

    return dto;
  }

  dtoToEntity(dto: RegistroPrimarioDto): RegistroPrimario {
    const entity = new RegistroPrimario();

    entity.RA = dto.RA;
    entity.curso = dto.curso;
    entity.encaminhado = dto.encaminhado;
    entity.fone = dto.fone;
    entity.id = dto.id;
    entity.notas = dto.notas;
    entity.orgao = dto.orgao;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();
    entity.deletedAt = new Date();

    return entity;
  }
}

export default RegistroPrimarioMapper;
