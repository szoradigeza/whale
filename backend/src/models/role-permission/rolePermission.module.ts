import { RolePermissionService } from './rolePermission.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissionRepository } from './rolePermission.repository';

@Module({
   imports: [TypeOrmModule.forFeature([RolePermissionRepository])],
   providers: [RolePermissionService],
   exports: [RolePermissionService],
})
export class RolePermissionModule {}
