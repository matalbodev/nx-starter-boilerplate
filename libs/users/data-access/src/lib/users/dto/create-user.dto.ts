import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator'
export class CreateUserDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
