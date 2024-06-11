import { IsDate, IsString, IsUUID } from 'class-validator';

class ExternalRegisterDto {
  @IsUUID()
  public id?: string;

  @IsString()
  public documentType: string;

  @IsString()
  public ciNumber: string;

  @IsString()
  public RA: string;

  @IsString()
  public course: string;

  @IsString()
  public subject: string;

  @IsString()
  public registeredBy: string;

  @IsString()
  public observations: string;

  @IsString()
  public organ: string;

  @IsDate()
  public forwardedDate: Date;

  @IsString()
  public notes: string;
}

export default ExternalRegisterDto;
