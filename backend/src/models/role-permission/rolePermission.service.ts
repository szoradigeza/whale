import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ability } from 'src/models/role-permission/entities/ability.entity';
import { RolePermissionEntity } from './serializers/rolePermission.serializer';
import { RolePermissionRepository } from './rolePermission.repository';

@Injectable()
export class RolePermissionService {
   getAbilityByRole(id: number): Ability {
      throw new Error('Method not implemented.');
   }
   constructor(
      @InjectRepository(RolePermissionRepository)
      private readonly rolePermissionRepository: RolePermissionRepository
   ) {}

   async get(
      id: number,
      relations: string[] = ['ability']
   ): Promise<RolePermissionEntity[] | null> {
      return await this.rolePermissionRepository.find({
         relations,
         where: { role: id },
      });
   }
}
