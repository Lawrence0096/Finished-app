import { TestBed } from '@angular/core/testing';

import { CompanyDisplayService } from './company-display.service';

describe('CompanyDisplayService', () => {
  let service: CompanyDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
