import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiateProfilePreviewSectionComponent } from './candiate-profile-preview-section.component';

describe('CandiateProfilePreviewSectionComponent', () => {
  let component: CandiateProfilePreviewSectionComponent;
  let fixture: ComponentFixture<CandiateProfilePreviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandiateProfilePreviewSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandiateProfilePreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
