import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  EXCEL_EXTENSION = '.xlsx';

  exportExcelFile(json: any[], fileName: string) {
    const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, fileName);

    XLSX.writeFile(workBook, `${fileName}${this.EXCEL_EXTENSION}`);
  }
}
