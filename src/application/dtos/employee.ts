import { IsDate, IsEmail, IsString } from 'class-validator';
import InternalRegisterDto from './internalRegister';
import ExternalRegisterDto from './externalRegister';

class EmployeeDto {
  @IsString()
  public id?: string;

  @IsString()
  public name: string;

  @IsString()
  public role: string;

  @IsEmail()
  public email: string;

  @IsString()
  public departament: string;

  @IsDate()
  public birthdate: Date;

  @IsString()
  public registrarionNumber: string;

  @IsString()
  public passwordHash: string;

  public internalRegister: InternalRegisterDto | null | undefined;

  public externalRegister: ExternalRegisterDto | null | undefined;
}

export default EmployeeDto;
