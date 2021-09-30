import { TestBed } from '@angular/core/testing';

import { CompanyListDataService } from './companies-list-data.service';

describe('CompanyDisplayService', () => {
  let service: CompanyListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
