import { TestBed } from '@angular/core/testing';

import { BangladeshService } from './bangladesh.service';

describe('BangladeshService', () => {
  let service: BangladeshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BangladeshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
