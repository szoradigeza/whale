import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   Tree,
   TreeChildren,
   TreeParent,
   OneToMany,
   ManyToMany,
   JoinTable,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
@Tree('closure-table')
export class Group_ {
   /* TODO:  What should we store in the users table?  */
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: String;

   @OneToMany(
      () => User,
      user => user.group_
   )
   user: User[];

   @TreeChildren()
   children: Group_[];

   @TreeParent()
   parent: Group_;

   @ManyToMany(() => User)
   @JoinTable()
   leaders: User[];
}
