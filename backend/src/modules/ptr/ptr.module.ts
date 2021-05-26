import { ExcelHandlerService } from './../excel-handler/excel-handler.service';
import { Module } from '@nestjs/common';
import { PtrService } from './ptr/ptr.service';
import { PtrController } from './ptr/ptr.controller';
import { PjtProjectModule } from 'src/models/pjt-project/pjtProject.module';

@Module({
   providers: [PtrService, ExcelHandlerService],
   imports: [PjtProjectModule],
   controllers: [PtrController],
})
export class PtrModule {}
