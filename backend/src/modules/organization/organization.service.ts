import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group_ } from 'src/models/group/entities/group.entity';
import GroupWithUsers from 'src/models/group-with-users.model';
import { TreeRepository } from 'typeorm';

@Injectable()
export class OrganizationService {
   constructor(
      @InjectRepository(Group_)
      private groupsRepository: TreeRepository<Group_>
   ) {}

   async getGroupHierarchyWithUsers() {
      const hierarchyTree = await this.groupsRepository.findTrees();
      let groupsWithHeadCount = await this.getHeadCountForAllGroups();
      this.recursiveToAddDataToGroups(hierarchyTree, groupsWithHeadCount);
      return hierarchyTree;
   }

   async getHeadCountForAllGroups() {
      const groupsWithUsers: any = await this.groupsRepository
         .createQueryBuilder('group_')
         .addSelect(['user.id', 'user.name'])
         .leftJoin('group_.user', 'user')
         .getMany();

      let groupsWithHeadCount: GroupWithUsers[] = [];
      groupsWithUsers.forEach(group => {
         let grpWithHeadCount: GroupWithUsers = {
            id: group.id,
            users: group.user,
            headCount: group.user.length,
         };
         groupsWithHeadCount.push(grpWithHeadCount);
      });
      return groupsWithHeadCount;
   }

   recursiveToAddDataToGroups(
      tree: Array<Group_>,
      groupsWithHeadCount: Array<GroupWithUsers>
   ) {
      /*Recursive iteration to add users and headcounter to group */
      let headCounter = 0;
      for (let i in tree) {
         let grpWithUsers: GroupWithUsers;
         if (typeof tree[i] == 'object' && tree[i] !== null) {
            grpWithUsers = groupsWithHeadCount.find(g => g.id === tree[i].id);
            this.addUsersToGroup(tree[i], grpWithUsers);
            if (tree[i].children.length > 0) {
               //add the group headnumber and the children headnumber to the counter
               headCounter += grpWithUsers.headCount;
               headCounter += this.recursiveToAddDataToGroups(
                  tree[i].children,
                  groupsWithHeadCount
               );
               this.addHeadCountToGroup(tree[i], headCounter);
            } else {
               this.addHeadCountToGroup(tree[i], grpWithUsers.headCount);
               headCounter += grpWithUsers.headCount;
            }
         }
      }
      return headCounter;
   }

   addHeadCountToGroup(group, headcount: number) {
      group.headCount = headcount;
   }

   addUsersToGroup(group, grpWithUsers: GroupWithUsers) {
      group.users = grpWithUsers.users;
   }
}
