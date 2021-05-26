import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { UserEntity } from './serializers/user.serializer';
import { classToPlain, plainToClass } from 'class-transformer';
import { User } from 'src/models/user/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends ModelRepository<User, UserEntity> {
   transform(model: User): UserEntity {
      return plainToClass(UserEntity, classToPlain(model));
   }
   transformMany(models: User[]): UserEntity[] {
      return models.map(model => this.transform(model));
   }
}
