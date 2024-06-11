import { Injectable } from '@nestjs/common';
import InternalRegisterDto from '../dtos/internalRegister';
import IMapper from './ientity.mapper';
import { InternalRegister } from 'src/domain/entities/internalRegister.entity';

@Injectable()
class InternalRegisterMapper
  implements IMapper<InternalRegister, InternalRegisterDto>
{
  entityToDto(entity: InternalRegister): InternalRegisterDto {
    const dto = new InternalRegisterDto();

    dto.id = entity.id;
    dto.RA = entity.RA;
    dto.course = entity.course;
    dto.phone = entity.phone;
    dto.subject = entity.subject;
    dto.finalSummary = entity.finalSummary;
    dto.organ = entity.organ;
    dto.forwardedDate = entity.forwardedDate;
    dto.notes = entity.notes;

    return dto;
  }

  dtoToEntity(dto: InternalRegisterDto): InternalRegister {
    const entity = new InternalRegister();

    entity.RA = dto.RA;
    entity.course = dto.course;
    entity.phone = dto.phone;
    entity.subject = dto.subject;
    entity.finalSummary = dto.finalSummary;
    entity.organ = dto.organ;
    entity.forwardedDate = dto.forwardedDate;
    entity.notes = dto.notes;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }
}

export default InternalRegisterMapper;
