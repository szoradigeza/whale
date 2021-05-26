import { Injectable, Options } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository, TreeRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserEntity } from 'src/models/user/serializers/user.serializer';
import { RolePermissionService } from 'src/models/role-permission/rolePermission.service';
import { UserRepository } from './user.repository';
import { RoleService } from '../role/role.service';
import { GroupService } from '../group/group.service';

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(UserRepository)
      private readonly usersRepository: UserRepository,
      private rolePermissionService: RolePermissionService,
      private roleService: RoleService,
      private groupService: GroupService
   ) {}

   async get(
      id: number,
      relations: string[] = [],
      throwsException = false
   ): Promise<UserEntity | null> {
      return await this.usersRepository.get(id, relations, throwsException);
   }

   async findOne(userName: string): Promise<any> {
      console.log('getUser');
      /*const manager = getManager();
      const asd = await this.usersRepository.findOne({userName: userName}, {relations: ['role']});
      const a2 = new User();
      const role =  await this.rolePermissionService.findOneRoleById(1);
      a2.name = "Szórádi Géza";
      a2.phoneNumber = "+36202196335";
      a2.userName="uib11383";
      a2.role = role;
      await manager.save(a2);
      
      const a3 = new User();
      const role1 =  await await this.rolePermissionService.findOneRoleById(1);
      a3.name = "Nagy Lajos";
      a3.phoneNumber = "+362012345";
      a3.userName="asd123";
      a3.role = role1;
      a3.parent = a2;
      await manager.save(a3); 

*/
      // return await this.usersRepository.findTrees();
      console.log(userName);
      let user = await this.usersRepository.findOne(
         { userName: userName },
         { relations: ['role'] }
      );
      return user;
      /*return this.usersRepository.findOne(
         {
            userName: userName}, {
            relations: ['right'], 
            select: ['id', 'right']
         })*/
      /*return this.usersRepository.createQueryBuilder("user")
            .leftJoin("user.right", "right")
            .select("user.id", 'user')
            .addSelect('right.rightName')
            .getOne();*/
   }

   async remove(id: string): Promise<void> {
      await this.usersRepository.delete(id);
   }

   async findOneWithoutIds() {
      return this.usersRepository
         .createQueryBuilder('user')
         .leftJoin('user.right', 'right')
         .select('user.id', 'user')
         .addSelect('role.roleName')
         .getOne();
   }

   async getCurrentUserAndPermissionByUserName(userName: string) {
      // TODO Exception handling
      const user: User = await this.findOne(userName);
      const permissions = await this.rolePermissionService.get(user.role.id);
      const userAndPermission = {
         user: user,
         permissions: permissions,
      };
      return userAndPermission;
   }

   async initUsers(userName: string) {
      const dummyUsers: any = [
         /*2*/ {
            name: 'Szórádi Géza',
            role: 1,
            phoneNumber: '+3620123456',
            userName: 'uib11383',
            group_: 1,
         },
         /*3*/ {
            name: 'Nagy Janos',
            role: 1,
            phoneNumber: '+3620123456',
            userName: 'teszt1',
            group_: 2,
            parentId: 1,
         },
         /*4*/ {
            name: 'Nagy Pista',
            role: 1,
            phoneNumber: '+3620123456',
            userName: 'teszt2',
            group_: 2,
            parentId: 2,
         },
         /*1*/ {
            name: 'Kiss Pista',
            role: 2,
            phoneNumber: '+3620123456',
            userName: 'teszt3',
            group_: 3,
            parentId: 1,
         },
         /*5*/ {
            name: 'Teszt Elek',
            role: 2,
            phoneNumber: '+3620123456',
            userName: 'teszt4',
            group_: 4,
            parentId: 1,
         },
         /*6*/ {
            name: 'Lakatos Karoly',
            role: 3,
            phoneNumber: '+3620123456',
            userName: 'teszt5',
            group_: 4,
            parentId: 5,
         },
      ];

      //dummyUsers.forEach( async user => {
      /*const manager = getManager();
         //const asd = await this.usersRepository.findOne({userName: userName}, {relations: ['role']});
         const a2 = new User();
         a2.role =  await this.roleService.get(dummyUsers[4].role);
         a2.name = dummyUsers[4].name;
         a2.phoneNumber = dummyUsers[4].phoneNumber;
         a2.userName= dummyUsers[4].userName;
         a2.group_= await this.groupService.get(dummyUsers[4].group_);
         a2.parent = await this.get(dummyUsers[4].parentId);
         console.log(a2.parent);
         await manager.save(a2);*/
      //})
   }
}
