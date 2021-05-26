import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { AuthController } from './modules/auth/auth.controller';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
export class AppController {
   constructor() {}

   /*  @UseGuards(JwtAuthGuard)
   @Get('profile')
   getProfile(@Request() req) {
      return req.user;
   }*/
}
