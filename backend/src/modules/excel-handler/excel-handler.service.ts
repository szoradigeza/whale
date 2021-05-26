import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';
import { Worksheet } from 'exceljs';

@Injectable()
export class ExcelHandlerService {
   handleProjectListFile(file: any, colNames: string[] = null) {
      console.log(file.path);
      let workbook = new ExcelJS.Workbook();
      workbook.xlsx
         .readFile('./data/ptr/2021/2/2021_02_project_list.xlsx')
         .then(() => {
            let ws = workbook.worksheets[0];
            let row = ws.getRow(1);
            let colAddresses: string[] = [];

            for (let i: number = 1; i < row.values.length; i++) {
               let cell = row.getCell(i);
               console.log(cell.fullAddress.col);
               if (colNames) {
                  if (colNames.includes(cell.value.toString()))
                     colAddresses.push(cell.fullAddress.col);
               } else {
                  console.log(cell.value);
                  colAddresses.push(cell.fullAddress.col);
               }
            }
            console.log(colAddresses);
            let result = this.getColumnsByColAddress(colAddresses);
            console.log(result);
            return colAddresses;
         });
   }

   getColumnsByColAddress(colAddresses) {
      let result = [];
   }
   excelToObjectByHeader() {}

   /*0getCell(col: any, fileSource: string, workSheet = 0) {
      let workbook = new ExcelJS.Workbook();
      let ws: Worksheet;

      workbook.xlsx
         .readFile('./data/ptr/2021/2/2021_02_project_list.xlsx')
         .then(() => {
            ws = workbook.worksheets[workSheet];
         });

      if (typeof col === 'string') {
         // is it a key?
         const column = ws.getColumnKey(col);
         if (column) {
            col = column.number;
         } else {
            col = colCache.l2n(col);
         }
      }
      return (
         this._cells[col - 1] ||
         this.getCellEx({
            address: colCache.encodeAddress(this._number, col),
            row: this._number,
            col,
         })
      );
   }*/

   excelSheetToJson() {
      /*let workbook = new ExcelJS.Workbook();
      const wb = XLSX.readFile('./data/ptr/2021/2/2021_02_project_list.xlsx');
      let ws = wb.Sheets['Munka1'];
      let asd = XLSX.utils.sheet_to_json(ws);
      console.log(asd);*/
      /* workbook.xlsx
         .readFile('./data/ptr/2021/2/2021_02_project_list.xlsx')
         .then(() => {
            let ws = workbook.worksheets[0];
            let asd = XLSX.utils.sheet_to_json(ws);
            console.log(asd);
         });*/
   }

   async getWsWithKey(excelFilePath: string): Promise<Worksheet> {
      let workbook = new ExcelJS.Workbook();
      let result;
      await workbook.xlsx
         .readFile(excelFilePath)
         .then(() => {
            let ws = workbook.worksheets[0];
            let row = ws.getRow(1);
            //set the first row values to key
            for (let i: number = 1; i < row.values.length; i++) {
               ws.getColumn(i).key = row
                  .getCell(i)
                  .value.toString()
                  .toLowerCase();
               //console.log(row.getCell(i).value.toString());
            }
            result = ws;
         })
         .catch(e => {
            console.log(e);
         });
      return result;
   }

   constructor() {}
}
