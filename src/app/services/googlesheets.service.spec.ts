import { TestBed } from '@angular/core/testing';

import { GoogleSheetsService } from './googlesheets.service';

describe('GooglesheetsService', () => {
  let service: GoogleSheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
