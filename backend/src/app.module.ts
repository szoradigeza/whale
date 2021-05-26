import { PjtProjectModule } from './models/pjt-project/pjtProject.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { DatabaseConfig } from './database.config';
import { Role } from './models/role/entities/role.entity';
import { RoleModule } from './models/role/role.module';
import { RoleRepository } from './models/role/role.repository';
import { RolePermissionModule } from './models/role-permission/rolePermission.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { GroupModule } from './models/group/group.module';
import { UserModule } from './models/user/user.module';
import { PtrModule } from './modules/ptr/ptr.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ExcelHandlerModule } from './modules/excel-handler/excel-handler.module';

@Module({
   imports: [
      TypeOrmModule.forFeature([RoleRepository]),
      ConfigModule.forRoot({
         isGlobal: true,
         load: [config],
      }),
      ScheduleModule.forRoot(),
      TypeOrmModule.forRootAsync({
         imports: [ConfigModule],
         useClass: DatabaseConfig,
      }),
      UserModule,
      RoleModule,
      GroupModule,
      RolePermissionModule,
      OrganizationModule,
      AuthModule,
      PtrModule,
      PjtProjectModule,
      ExcelHandlerModule,
   ],
   controllers: [AppController],
   providers: [],
})
export class AppModule {}
