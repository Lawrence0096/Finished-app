import { TestBed } from '@angular/core/testing';

import { CustomViewService } from './company-data.service';

describe('CustomViewService', () => {
  let service: CustomViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
