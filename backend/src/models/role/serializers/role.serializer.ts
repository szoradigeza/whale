import { Expose } from 'class-transformer';
import { ModelEntity } from 'src/common/serializers/model.serializer';
import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { Role } from '../entities/role.entity';
import { IRole } from '../interfaces/role.interface';

export class RoleEntity extends ModelEntity implements IRole {
   name: String;
   rolePermissions: RolePermission[];
   user: Role[];
}
