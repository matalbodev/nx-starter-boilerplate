import { ApiProperty } from "@nestjs/swagger";

export class UserWithoutPassword {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty({ example: 'test@gmail.com', description: 'email of user'})
  email: string;
  @ApiProperty()
  username: string;
}

export class UserEntity extends UserWithoutPassword {
  @ApiProperty()
  password?: string;
}
