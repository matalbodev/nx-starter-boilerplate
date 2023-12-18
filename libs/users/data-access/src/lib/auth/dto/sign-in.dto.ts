import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class SignInDTO {

  @ApiProperty({
    default: 'mathieualbore@gmail.com'
  })
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty({
    default: 'test'
  })
  @IsNotEmpty()
  readonly password: string;
}
