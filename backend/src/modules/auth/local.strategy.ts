import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ContextIdFactory } from '@nestjs/core/helpers/context-id-factory';
import { ModuleRef } from '@nestjs/core/injector/module-ref';
import { use } from 'passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private moduleRef: ModuleRef, private authService: AuthService) {
      super({
         passReqToCallback: true,
      });
   }

   async validate(
      request: Request,
      username: string,
      password: string
   ): Promise<any> {
      const contextId = ContextIdFactory.getByRequest(request);
      // "AuthService" is a request-scoped provider
      const authService = await this.moduleRef.resolve(AuthService, contextId);
      const user = await this.authService.validateUser(username, password);
      if (!user) {
         throw new UnauthorizedException();
      }
      return user;
   }
}
