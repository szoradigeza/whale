import { Ability } from 'src/models/role-permission/entities/ability.entity';
import { IRolePermission } from '../interfaces/rolePermission.interface';
import { ModelEntity } from 'src/common/serializers/model.serializer';

export class RolePermissionEntity extends ModelEntity
   implements IRolePermission {
   ability: Ability[];
}
