import { TestBed } from '@angular/core/testing';

import { UserCourierServisesService } from './user-courier-servises.service';

describe('UserCourierServisesService', () => {
  let service: UserCourierServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCourierServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
