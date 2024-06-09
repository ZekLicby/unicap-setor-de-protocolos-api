import { Injectable } from '@nestjs/common';
import IMapper from './ientity.mapper';
import ExternalRegisterDto from '../dtos/externalRegister';
import { ExternalRegister } from 'src/domain/entities/externalRegister.entity';

@Injectable()
class ExternalRegisterMapper
  implements IMapper<ExternalRegister, ExternalRegisterDto>
{
  entityToDto(entity: ExternalRegister): ExternalRegisterDto {
    const dto = new ExternalRegisterDto();

    dto.RA = entity.RA;
    dto.course = entity.course;
    dto.forwardedDate = entity.forwardedDate;
    dto.id = entity.id;
    dto.notes = entity.notes;
    dto.organ = entity.organ;
    dto.subject = entity.subject;
    dto.registeredBy = entity.registeredBy;
    dto.documentType = entity.documentType;

    return dto;
  }

  dtoToEntity(dto: ExternalRegisterDto): ExternalRegister {
    const entity = new ExternalRegister();

    entity.RA = dto.RA;
    entity.course = dto.course;
    entity.forwardedDate = dto.forwardedDate;
    entity.notes = dto.notes;
    entity.organ = dto.organ;
    entity.subject = dto.subject;
    entity.registeredBy = dto.registeredBy;
    entity.documentType = dto.documentType;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }
}

export default ExternalRegisterMapper;
