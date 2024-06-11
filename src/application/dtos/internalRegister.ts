import { IsDate, IsString } from 'class-validator';

class InternalRegisterDto {
  @IsString()
  public id?: string;

  @IsString()
  public RA: string;

  @IsString()
  public course: string;

  @IsString()
  public phone: string;

  @IsString()
  public subject: string;

  @IsString()
  public finalSummary: string;

  @IsString()
  public organ: string;

  @IsDate()
  public forwardedDate: Date;

  @IsString()
  public notes: string;
}

export default InternalRegisterDto;
