import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesInfoSection1Component } from './candidates-info-section1.component';

describe('CandidatesInfoSection1Component', () => {
  let component: CandidatesInfoSection1Component;
  let fixture: ComponentFixture<CandidatesInfoSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesInfoSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesInfoSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
