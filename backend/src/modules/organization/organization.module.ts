import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group_ } from 'src/models/group/entities/group.entity';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
   providers: [OrganizationService],
   imports: [TypeOrmModule.forFeature([Group_])],
   controllers: [OrganizationController],
})
export class OrganizationModule {}
