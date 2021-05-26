import { Controller, Get } from '@nestjs/common';
import { OrganizationService } from './organization.service';
@Controller('group')
export class OrganizationController {
   constructor(private organizationService: OrganizationService) {}

   @Get('get-group-hierarchy')
   async getGroupHierarchy() {
      return await this.organizationService.getGroupHierarchyWithUsers();
   }
}
