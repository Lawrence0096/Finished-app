import { TestBed } from '@angular/core/testing';

import { SelectedCompanyDataService } from './selected-company-data.service';

describe('NamefetchService', () => {
  let service: SelectedCompanyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCompanyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
