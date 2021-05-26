import { ModelEntity } from 'src/common/serializers/model.serializer';
import { Group_ } from 'src/models/group/entities/group.entity';
import { Role } from 'src/models/role/entities/role.entity';
import { User } from 'src/models/user/entities/user.entity';
import { IUser } from '../interfaces/user.interface';

export class UserEntity extends ModelEntity implements IUser {
   userName: string;
   name: string;
   phoneNumber: null | string;
   role: Role;
   group_: Group_;
   children: User[];
   parent: User;
}
