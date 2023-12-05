import { Injectable } from '@nestjs/common';
import IMapper from './ientity.mapper';
import { Funcionario } from 'src/domain/entities/funcionario.entity';
import FuncionarioDto from '../dtos/funcionario.dto';

@Injectable()
class FuncionarioMapper implements IMapper<Funcionario, FuncionarioDto> {
  public entityToDto(entity: Funcionario): FuncionarioDto {
    const dto = new FuncionarioDto();

    dto.cargo = entity.cargo;
    dto.dataNascimento = entity.dataNascimento;
    dto.nome = entity.nome;
    dto.matricula = entity.matricula;
    dto.id = entity.id;

    return dto;
  }

  public dtoToEntity(dto: FuncionarioDto): Funcionario {
    const entity = new Funcionario();

    entity.cargo = dto.cargo;
    entity.dataNascimento = dto.dataNascimento;
    entity.nome = dto.nome;
    entity.matricula = dto.matricula;
    entity.id = dto.id;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();
    entity.deletedAt = new Date();

    return entity;
  }
}

export default FuncionarioMapper;
