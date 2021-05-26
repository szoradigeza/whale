import { Module } from '@nestjs/common';
import { ExcelHandlerService } from './excel-handler.service';

@Module({
   providers: [ExcelHandlerService],
   exports: [ExcelHandlerService],
})
export class ExcelHandlerModule {}
