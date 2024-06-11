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

    dto.id = entity.id;
    dto.documentType = entity.documentType;
    dto.ciNumber = entity.ciNumber;
    dto.RA = entity.RA;
    dto.course = entity.course;
    dto.subject = entity.subject;
    dto.registeredBy = entity.registeredBy;
    dto.observations = entity.observations;
    dto.organ = entity.organ;
    dto.forwardedDate = entity.forwardedDate;
    dto.notes = entity.notes;

    return dto;
  }

  dtoToEntity(dto: ExternalRegisterDto): ExternalRegister {
    const entity = new ExternalRegister();
    
    entity.documentType = dto.documentType;
    entity.ciNumber = dto.ciNumber;
    entity.RA = dto.RA;
    entity.course = dto.course;
    entity.subject = dto.subject;
    entity.registeredBy = dto.registeredBy;
    entity.observations = dto.observations;
    entity.organ = dto.organ;
    entity.forwardedDate = dto.forwardedDate;
    entity.notes = dto.notes;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }
}

export default ExternalRegisterMapper;
