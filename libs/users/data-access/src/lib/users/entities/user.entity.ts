import { ApiProperty } from '@nestjs/swagger';
import type { Role } from '@prisma/client/shared';

export class UserWithoutPassword {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty({ example: 'test@gmail.com', description: 'email of user' })
  email: string;
  @ApiProperty()
  username: string;
  @ApiProperty({
    example: 'USER',
  })
  role: Role;
}

export class UserEntity extends UserWithoutPassword {
  @ApiProperty()
  password?: string;
}
