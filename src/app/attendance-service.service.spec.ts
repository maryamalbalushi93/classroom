import { TestBed } from '@angular/core/testing';

import { AttendanceService } from './attendance-service.service';

describe('AttendanceServiceService', () => {
  let service: AttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
