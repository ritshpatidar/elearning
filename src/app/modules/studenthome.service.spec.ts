import { TestBed } from '@angular/core/testing';

import { StudenthomeService } from './studenthome.service';

describe('StudenthomeService', () => {
  let service: StudenthomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenthomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
