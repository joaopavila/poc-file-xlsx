import { Component } from '@angular/core';
import { ExcelService } from './services/excelService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    {
      eid: 'e101',
      ename: 'ravi',
      esal: 1000,
    },
    {},
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000,
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000,
    },
  ];

  constructor(private excelService: ExcelService) {}

  exportFileXlsx() {
    this.excelService.exportExcelFile(this.data, 'test');
  }
}
