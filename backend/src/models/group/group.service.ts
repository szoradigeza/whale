import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group_ } from 'src/models/group/entities/group.entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class GroupService {
   constructor(
      @InjectRepository(Group_)
      private groupsRepository: TreeRepository<Group_>
   ) {}

   async get(id: number) {
      return await this.groupsRepository.findOne(id);
   }
}
