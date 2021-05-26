import { PjtProject } from './entities/pjtProject.entity';
import { EntityRepository } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { classToPlain, plainToClass } from 'class-transformer';
import { PjtProjectEntity } from './serializers/pjtProject.serializer';

@EntityRepository(PjtProject)
export class PjtProjectRepository extends ModelRepository<
   PjtProject,
   PjtProjectEntity
> {
   transform(model: PjtProject): PjtProjectEntity {
      return plainToClass(PjtProjectEntity, classToPlain(model));
   }
   transformMany(models: PjtProject[]): PjtProjectEntity[] {
      return models.map(model => this.transform(model));
   }
}
