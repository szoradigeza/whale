import { User } from 'src/models/user/entities/user.entity';

export default interface GroupWithUsers {
   id: number;
   users: User[];
   headCount: number;
}
