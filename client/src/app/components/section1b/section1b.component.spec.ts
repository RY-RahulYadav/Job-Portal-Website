import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1bComponent } from './section1b.component';

describe('Section1bComponent', () => {
  let component: Section1bComponent;
  let fixture: ComponentFixture<Section1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section1bComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
