import { TestBed } from '@angular/core/testing';

import { NamefetchService } from './namefetch.service';

describe('NamefetchService', () => {
  let service: NamefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
