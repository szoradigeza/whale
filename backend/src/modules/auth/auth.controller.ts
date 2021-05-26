import { UserService } from 'src/models/user/user.service';
import {
   Controller,
   Get,
   UseGuards,
   Post,
   Request,
   Headers,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(
      private authSerivce: AuthService,
      private userService: UserService
   ) {}

   @UseGuards(LocalAuthGuard)
   @Post('/login')
   async login(@Request() req) {
      return this.authSerivce.login(req.user);
   }

   @Get('current-user-data')
   async getProfile(@Headers() headers) {
      return await this.authSerivce.getUserDataByBearer(headers.authorization);
   }

   @Get('/inituser')
   async initUser(@Request() req) {
      return this.userService.initUsers(req.user);
   }
}
