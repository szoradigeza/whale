import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Ability {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   pageName: String;

   @Column()
   name: String;

   @OneToMany(
      () => RolePermission,
      rolePermission => rolePermission.ability
   )
   rolePermission: RolePermission;
}
