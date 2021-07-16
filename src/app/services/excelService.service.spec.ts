/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ExcelService } from './excelService.service';

describe('Service: ExcelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelService],
    });
  });

  it('should ...', inject([ExcelService], (service: ExcelService) => {
    expect(service).toBeTruthy();
  }));
});
