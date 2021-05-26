import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ability } from 'src/models/role-permission/entities/ability.entity';
import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { RolePermissionRepository } from '../role-permission/rolePermission.repository';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
   imports: [
      TypeOrmModule.forFeature([RoleRepository]),
      TypeOrmModule.forFeature([RolePermissionRepository]),
   ],
   providers: [RoleService],
   exports: [RoleService],
})
export class RoleModule {}
