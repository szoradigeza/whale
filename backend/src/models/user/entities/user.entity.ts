import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   Tree,
   TreeChildren,
   TreeParent,
   TreeLevelColumn,
   JoinColumn,
   OneToMany,
   ManyToOne,
   BaseEntity,
} from 'typeorm';
import { Group_ } from '../../group/entities/group.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
@Tree('closure-table')
export class User {
   /* TODO:  What should we store in the users table?  */
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   userName: String;

   @Column()
   name: String;

   @Column()
   phoneNumber: String;

   @ManyToOne(
      () => Role,
      role => role.user
   )
   role: Role;

   @ManyToOne(
      () => Group_,
      group => group.user
   )
   group_: Group_;

   @TreeChildren()
   children: User[];

   @TreeParent()
   parent: User;
}
