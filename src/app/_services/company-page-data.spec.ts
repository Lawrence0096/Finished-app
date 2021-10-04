import { TestBed } from '@angular/core/testing';

import { CompanyPageService } from './company-page-data.service';

describe('CustomViewService', () => {
  let service: CompanyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
