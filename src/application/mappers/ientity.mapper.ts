interface IMapper<TEntity, TDto> {
  entityToDto(entity: TEntity): TDto;
  dtoToEntity(dto: TDto): TEntity;
}

export default IMapper;
