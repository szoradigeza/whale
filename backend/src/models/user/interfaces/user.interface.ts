import { Group_ } from 'src/models/group/entities/group.entity';
import { Role } from 'src/models/role/entities/role.entity';
import { User } from 'src/models/user/entities/user.entity';

export interface IUser {
   userName: string;
   name: string;
   phoneNumber: null | string;
   role: Role;
   group_: null | Group_;
   children: null | User[];
   parent: null | User;
}
