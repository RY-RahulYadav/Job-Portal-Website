import { TestBed } from '@angular/core/testing';

import { JobpostApiService } from './jobpost-api.service';

describe('JobpostApiService', () => {
  let service: JobpostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobpostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
