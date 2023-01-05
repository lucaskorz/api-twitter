import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Request() req: any) {
    return req.user;
  }
}
