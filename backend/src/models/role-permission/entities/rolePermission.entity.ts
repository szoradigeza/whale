import {
   Entity,
   OneToOne,
   JoinColumn,
   OneToMany,
   PrimaryColumn,
   PrimaryGeneratedColumn,
   ManyToOne,
} from 'typeorm';
import { Ability } from './ability.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class RolePermission {
   @PrimaryGeneratedColumn()
   id: number;

   @ManyToOne(
      () => Role,
      role => role.rolePermissions
   )
   @JoinColumn({})
   role: Role;

   @ManyToOne(
      () => Ability,
      ability => ability.rolePermission
   )
   ability: Ability[];
}
