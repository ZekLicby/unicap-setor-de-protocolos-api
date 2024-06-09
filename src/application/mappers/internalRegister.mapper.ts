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

    dto.RA = entity.RA;
    dto.course = entity.course;
    dto.forwardedDate = entity.forwardedDate;
    dto.phone = entity.phone;
    dto.id = entity.id;
    dto.notes = entity.notes;
    dto.organ = entity.organ;

    return dto;
  }

  dtoToEntity(dto: InternalRegisterDto): InternalRegister {
    const entity = new InternalRegister();

    entity.RA = dto.RA;
    entity.course = dto.course;
    entity.forwardedDate = dto.forwardedDate;
    entity.phone = dto.phone;
    entity.notes = dto.notes;
    entity.organ = dto.organ;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }
}

export default InternalRegisterMapper;
