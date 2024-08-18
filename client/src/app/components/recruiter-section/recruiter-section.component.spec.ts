import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSectionComponent } from './recruiter-section.component';

describe('RecruiterSectionComponent', () => {
  let component: RecruiterSectionComponent;
  let fixture: ComponentFixture<RecruiterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
