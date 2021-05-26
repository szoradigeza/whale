import { Expose } from 'class-transformer';
import { ModelEntity } from 'src/common/serializers/model.serializer';
import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';
import { IPjtProject } from '../interfaces/pjtProject.interface';

export class PjtProjectEntity extends ModelEntity implements IPjtProject {
   id: number;
   projectDefinition: string;
   globalProjectNum: string;
   name: string;
   responsible: string;
   profitCenter: string;
   status: string;
}
