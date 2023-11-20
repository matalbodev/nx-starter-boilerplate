import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './auth.decorator';
import { RefreshGuard } from './refresh.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDTO) {
    return await this.authService.signIn(
      signInDto.username,
      signInDto.password
    );
  }

  @Public()
  @UseGuards(RefreshGuard)
  @Post('refresh')
  async refreshToken(@Request() req: any) {
    return await this.authService.refreshToken(req.user);
  }
}
