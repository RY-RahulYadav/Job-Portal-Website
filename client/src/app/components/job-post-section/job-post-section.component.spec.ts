import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostSectionComponent } from './job-post-section.component';

describe('JobPostSectionComponent', () => {
  let component: JobPostSectionComponent;
  let fixture: ComponentFixture<JobPostSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
