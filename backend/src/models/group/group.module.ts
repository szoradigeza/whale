import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group_ } from './entities/group.entity';
import { GroupService } from './group.service';

@Module({
   imports: [TypeOrmModule.forFeature([Group_])],
   providers: [GroupService],
   exports: [GroupService],
})
export class GroupModule {}
