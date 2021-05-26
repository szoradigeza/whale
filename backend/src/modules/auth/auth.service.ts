import { RoleService } from '../../models/role/role.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../../models/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Client } from 'ldapts';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/models/user/entities/user.entity';
import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { RolePermissionService } from 'src/models/role-permission/rolePermission.service';

@Injectable()
export class AuthService {
   readonly ldapUrl = this.configService.get('LDAP_URL');
   client: Client;

   constructor(
      private userService: UserService,
      private jwtService: JwtService,
      private configService: ConfigService,
      private rolePermissionService: RolePermissionService,
      private roleService: RoleService
   ) {
      this.client = new Client({
         url: this.ldapUrl,
      });
   }

   async validateUser(username: string, password: string): Promise<any> {
      /* if (await this.ldapConnection(username, password)) {
         const user = await this.userService.findOne(username).finally();
         if (user) {
            return user;
         }
      }*/
      console.log(username);
      const user = await this.userService.findOne(username).finally();
      console.log('asd');
      if (user) {
         return user;
      }
   }

   async login(user: User) {
      const payload = {
         userName: user.userName,
         role: user.role.name,
      };
      const userPermissions = await this.rolePermissionService.get(
         user.role.id
      );
      if (userPermissions) {
         return {
            name: user.name,
            phoneNumber: user.phoneNumber,
            access_token: this.jwtService.sign(payload),
            permissions: userPermissions,
         };
      }
      throw new HttpException(
         {
            status: HttpStatus.NOT_FOUND,
            error: 'No user privileges.',
         },
         HttpStatus.FORBIDDEN
      );
   }

   async ldapConnection(username, password) {
      try {
         await this.client.bind(`${username}@auto.contiwan.com`, password, []);
      } catch (ex) {
         return false;
      }
      return true;
   }

   async getUserDataByBearer(bearer: string) {
      console.log(bearer);
      const userName = this.getUserNameFromBearer(bearer);
      const user = await this.userService.getCurrentUserAndPermissionByUserName(
         userName
      );
      return user;
   }

   getUserNameFromBearer(bearer: string) {
      let getJwt = (x: string) => x.substring(x.indexOf(' ') + 1);
      const jwt = getJwt(bearer);
      const decodedJWT: any = this.jwtService.decode(jwt);
      return decodedJWT.userName;
   }
}
