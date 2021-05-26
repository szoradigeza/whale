import { PjtProjectEntity } from './serializers/pjtProject.serializer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PjtProjectRepository } from './pjtProject.repository';
import { PjtProject } from './entities/pjtProject.entity';

@Injectable()
export class PjtProjectService {
   constructor(
      @InjectRepository(PjtProjectRepository)
      private readonly pjtProjectRepository: PjtProjectRepository
   ) {}

   async get(id: number): Promise<PjtProjectEntity | null> {
      return await this.pjtProjectRepository.get(id);
   }
   async createEntity(pjtProject: PjtProject) {
      return await this.pjtProjectRepository.createEntity(pjtProject);
   }
}
