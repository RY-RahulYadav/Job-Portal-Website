import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailSection1Component } from './job-detail-section1.component';

describe('JobDetailSection1Component', () => {
  let component: JobDetailSection1Component;
  let fixture: ComponentFixture<JobDetailSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
