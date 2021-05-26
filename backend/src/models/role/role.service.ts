import { RoleEntity } from './serializers/role.serializer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { Ability } from 'src/models/role-permission/entities/ability.entity';

@Injectable()
export class RoleService {
   getAbilitiesByRoleId(id: number): Ability {
      throw new Error('Method not implemented.');
   }
   constructor(
      @InjectRepository(RoleRepository)
      private readonly roleRepository: RoleRepository
   ) {}

   async get(
      id: number,
      relations: string[] = ['rolePermissions', 'rolePermissions.ability'],
      throwsException = false
   ): Promise<RoleEntity | null> {
      return await this.roleRepository.get(id, relations, throwsException);
   }
}
