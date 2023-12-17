import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client/shared';
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
  @ApiProperty()
  role: Role;
}
