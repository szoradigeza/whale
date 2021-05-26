import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PjtProjectRepository } from './pjtProject.repository';
import { PjtProjectService } from './pjtProject.service';

@Module({
   imports: [TypeOrmModule.forFeature([PjtProjectRepository])],
   providers: [PjtProjectService],
   exports: [PjtProjectService],
})
export class PjtProjectModule {}
