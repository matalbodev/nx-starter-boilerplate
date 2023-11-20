import { Body, Controller, Get, Param, Post, Query, Response } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserEntity, UserWithoutPassword } from './entities/user.entity';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response as Res } from 'express';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @ApiResponse({
    status: 200 | 404,
    type: Array<UserWithoutPassword>,
  })
  @ApiQuery({
    name: 'take',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'skip',
    type: Number,
    required: false,
  })
  async getUsers(
    @Query('take') take?: number,
    @Query('skip') skip?: number
  ): Promise<UserWithoutPassword[] | null> {

    const users =  await this.userService.findAllUsers({
      take,
      skip
    })
    return users;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: UserWithoutPassword,
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: false,
  })
  async getUser(
    @Response() res: Res,
    @Param('id') id: number
  ) {
    const user = await this.userService.userWithoutPassword({
      id: Number(id)
    })
    console.log(user)
    user
      ? res.status(200).json(user)
      : res.status(404).json({ error: `No user find for this id : ${id}` })
  }

  @Post('create')
  @ApiResponse({
    status: 200,
    type: UserEntity,
  })
  async createUser(
    @Body() userData: CreateUserDTO
  ): Promise<UserEntity | null> {
    const { username, email, password } = userData;
    return this.userService.createUser({
      username,
      email,
      password,
    });
  }
}
