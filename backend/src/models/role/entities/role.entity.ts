import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   OneToMany,
   BaseEntity,
} from 'typeorm';
import { RolePermission } from '../../role-permission/entities/rolePermission.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Role {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: String;

   @OneToMany(
      () => RolePermission,
      rolePermission => rolePermission.role
   )
   rolePermissions: RolePermission[];

   @OneToMany(
      () => User,
      user => user.role
   )
   user: Role[];
}
