import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { classToPlain, plainToClass } from 'class-transformer';
import { Role } from './entities/role.entity';
import { RoleEntity } from './serializers/role.serializer';

@EntityRepository(Role)
export class RoleRepository extends ModelRepository<Role, RoleEntity> {
   transform(model: Role): RoleEntity {
      return plainToClass(RoleEntity, classToPlain(model));
   }
   transformMany(models: Role[]): RoleEntity[] {
      return models.map(model => this.transform(model));
   }
}
