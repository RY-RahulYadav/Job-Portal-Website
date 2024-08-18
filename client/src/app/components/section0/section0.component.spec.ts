import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section0Component } from './section0.component';

describe('Section0Component', () => {
  let component: Section0Component;
  let fixture: ComponentFixture<Section0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
