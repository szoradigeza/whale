import { RolePermissionEntity } from './serializers/rolePermission.serializer';
import { RolePermission } from './entities/rolePermission.entity';
import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { classToPlain, plainToClass } from 'class-transformer';

@EntityRepository(RolePermission)
export class RolePermissionRepository extends ModelRepository<
   RolePermission,
   RolePermissionEntity
> {
   transform(model: RolePermission): RolePermissionEntity {
      return plainToClass(RolePermissionEntity, classToPlain(model));
   }
   transformMany(models: RolePermission[]): RolePermissionEntity[] {
      return models.map(model => this.transform(model));
   }
}
