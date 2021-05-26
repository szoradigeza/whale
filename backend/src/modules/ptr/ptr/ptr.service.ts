import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs';
import * as ExcelJS from 'exceljs';
import { ExcelHandlerService } from 'src/modules/excel-handler/excel-handler.service';
import { PjtProject } from 'src/models/pjt-project/entities/pjtProject.entity';
import { PjtProjectService } from 'src/models/pjt-project/pjtProject.service';

@Injectable()
export class PtrService {
   constructor(
      private excelHandlerService: ExcelHandlerService,
      private pjtProjectService: PjtProjectService
   ) {}

   async handleProjectListFile(file: any) {
      console.log(file.path);
      let ws = await this.excelHandlerService.getWsWithKey(
         './data/ptr/2021/2/2021_02_project_list.xlsx'
      );
      ws.eachRow((row, rowNumber) => {
         if (rowNumber > 1) {
            const project = new PjtProject();
            const getCellValue = (cellKey: string) => {
               return row.getCell(cellKey).value.toString();
            };
            try {
               project.projectDefinition = getCellValue('project definition');
               project.globalProjectNum = getCellValue('global project number');
               project.name = getCellValue('name');
               project.responsible = getCellValue('name of resp.person');
               project.profitCenter = getCellValue('profit center');
               project.status = getCellValue('status');
            } catch (e) {
               throw new HttpException(
                  {
                     status: HttpStatus.UNPROCESSABLE_ENTITY,
                     msg: 'Invalid headers in excel file.',
                  },
                  HttpStatus.UNPROCESSABLE_ENTITY
               );
            }
            this.pjtProjectService.createEntity(project);
         }
      });
      return { msg: 'Upload completed successfully.' };
   }

   private readonly logger = new Logger(PtrService.name);

   /*
   It'll create new folder for ptr in every year.
   */
   @Cron('* * * 12 31 *')
   handleFolderCron() {
      const dateObj = new Date();
      const year = dateObj.getUTCFullYear() + 1;
      var dir = './data/ptr/' + year;

      if (!fs.existsSync(dir)) {
         fs.mkdirSync(dir, { recursive: true });
         for (let i = 1; i < 12; i++) {
            fs.mkdirSync(dir + '/' + i);
         }
      } else {
         console.log('folder exist');
      }
   }
}
