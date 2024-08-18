import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPart1Component } from './r-part1.component';

describe('RPart1Component', () => {
  let component: RPart1Component;
  let fixture: ComponentFixture<RPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RPart1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
