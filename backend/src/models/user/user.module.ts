import { GroupModule } from './../group/group.module';
import { GroupService } from './../group/group.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserTreeService } from './user.tree.service';
import { RolePermissionModule } from '../role-permission/rolePermission.module';
import { RoleModule } from '../role/role.module';

@Module({
   imports: [
      TypeOrmModule.forFeature([UserRepository]),
      RolePermissionModule,
      RoleModule,
      GroupModule,
   ],
   providers: [UserService, UserTreeService],
   exports: [UserService, UserTreeService],
})
export class UserModule {}
