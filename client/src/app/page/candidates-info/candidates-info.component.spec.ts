import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesInfoComponent } from './candidates-info.component';

describe('CandidatesInfoComponent', () => {
  let component: CandidatesInfoComponent;
  let fixture: ComponentFixture<CandidatesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
