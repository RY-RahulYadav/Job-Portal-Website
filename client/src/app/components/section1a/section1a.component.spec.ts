import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1aComponent } from './section1a.component';

describe('Section1aComponent', () => {
  let component: Section1aComponent;
  let fixture: ComponentFixture<Section1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1aComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
