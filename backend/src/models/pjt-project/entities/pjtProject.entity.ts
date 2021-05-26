import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PjtProject {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: String;

   @Column()
   projectDefinition: String;

   @Column()
   globalProjectNum: String;

   @Column()
   responsible: String;

   @Column()
   profitCenter: String;

   @Column()
   status: String;
}
