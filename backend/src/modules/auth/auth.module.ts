import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { AuthController } from './auth.controller';
import { RoleModule } from 'src/models/role/role.module';
import { RolePermissionModule } from 'src/models/role-permission/rolePermission.module';
import { UserService } from 'src/models/user/user.service';
import { UserModule } from 'src/models/user/user.module';

@Module({
   controllers: [AuthController],
   imports: [
      RoleModule,
      UserModule,
      RolePermissionModule,
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.registerAsync({
         imports: [ConfigModule],
         useFactory: async (configService: ConfigService) => ({
            secret: configService.get('JWT_SECRET'),
            signOptions: { expiresIn: configService.get('EXPIRED_TIME') },
         }),
         inject: [ConfigService],
      }),
   ],
   providers: [AuthService, LocalStrategy, JwtStrategy],
   exports: [AuthService],
})
export class AuthModule {}
