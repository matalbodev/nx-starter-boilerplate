import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class SignInDTO {

  @ApiProperty({
    default: 'malbore'
  })
  @IsNotEmpty()
  readonly username: string;
  @ApiProperty({
    default: 'test'
  })
  @IsNotEmpty()
  readonly password: string;
}
