import { TestBed } from '@angular/core/testing';

import { AddnewbranchService } from './addnewbranch.service';

describe('AddnewbranchService', () => {
  let service: AddnewbranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewbranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
