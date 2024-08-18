import { TestBed } from '@angular/core/testing';

import { RecruiterApiService } from './recruiter-api.service';

describe('RecruiterApiService', () => {
  let service: RecruiterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
