import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";


export class CreateUserDto {

  @IsNotEmpty()
  readonly username: string;

  readonly firstName: string;

  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

}
