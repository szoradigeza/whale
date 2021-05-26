import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { Role } from '../entities/role.entity';

export interface IRole {
   id: number;
   name: String;
   rolePermissions: RolePermission[];
   user: Role[];
}
