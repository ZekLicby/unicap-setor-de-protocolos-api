import { IsDate, IsString } from 'class-validator';

class InternalRegisterDto {
  @IsString()
  public id?: string;

  @IsString()
  public RA: string;

  @IsString()
  public course: string;

  @IsDate()
  public forwardedDate: Date;

  @IsString()
  public phone: string;

  @IsString()
  public organ: string;

  @IsString()
  public notes: string;
}

export default InternalRegisterDto;
