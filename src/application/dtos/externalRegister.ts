import { IsDate, IsString, IsUUID } from 'class-validator';

class ExternalRegisterDto {
  @IsUUID()
  public id?: string;

  @IsString()
  public documentType: string;

  @IsString()
  public notes: string;

  @IsString()
  public subject: string;

  @IsString()
  public registeredBy: string;

  @IsString()
  public RA: string;

  @IsString()
  public course: string;

  @IsDate()
  public forwardedDate: Date;

  @IsString()
  public organ: string;
}

export default ExternalRegisterDto;
