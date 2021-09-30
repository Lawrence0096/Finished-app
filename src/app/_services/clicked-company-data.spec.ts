import { TestBed } from '@angular/core/testing';

import { ClickedCompanyDataService } from './clicked-company-Data.service';

describe('NamefetchService', () => {
  let service: ClickedCompanyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickedCompanyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
