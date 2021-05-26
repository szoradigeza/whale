import { RolePermission } from 'src/models/role-permission/entities/rolePermission.entity';

export interface IPjtProject {
   id: number;
   projectDefinition: string;
   globalProjectNum: string;
   name: string;
   responsible: string;
   profitCenter: string;
   status: string;
}
