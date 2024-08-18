import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesInfoSection2Component } from './candidates-info-section2.component';

describe('CandidatesInfoSection2Component', () => {
  let component: CandidatesInfoSection2Component;
  let fixture: ComponentFixture<CandidatesInfoSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesInfoSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesInfoSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
