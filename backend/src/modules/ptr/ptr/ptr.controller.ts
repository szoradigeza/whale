import {
   Controller,
   Post,
   UploadedFile,
   UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PtrService } from './ptr.service';

@Controller('ptr')
export class PtrController {
   constructor(private ptrService: PtrService) {}

   @Post('upload-project-list')
   @UseInterceptors(
      FileInterceptor('photo', {
         storage: diskStorage({
            destination: (req, file, cb) => {
               const dateObj = new Date();
               const year = dateObj.getUTCFullYear();
               let month = dateObj.getUTCMonth() + 1;
               cb(null, `./data/ptr/${year}/${month}`);
            },
            filename: (req, file, cb) => {
               const dateObj = new Date();
               const calcMonth = () => {
                  let month = dateObj.getUTCMonth() + 1;
                  return month < 10 ? '0' + month : '' + month;
               };
               const year = dateObj.getUTCFullYear();
               let newFileName = `${year}_${calcMonth()}_project_list`;
               //Calling the callback passing the random name generated with the original extension name
               cb(null, `${newFileName}${extname(file.originalname)}`);
            },
         }),
      })
   )
   async uploadFile(@UploadedFile() file) {
      const resp = await this.ptrService.handleProjectListFile(file);
      return resp;
   }
}
