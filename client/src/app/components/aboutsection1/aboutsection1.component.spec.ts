import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutsection1Component } from './aboutsection1.component';

describe('Aboutsection1Component', () => {
  let component: Aboutsection1Component;
  let fixture: ComponentFixture<Aboutsection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutsection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutsection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
