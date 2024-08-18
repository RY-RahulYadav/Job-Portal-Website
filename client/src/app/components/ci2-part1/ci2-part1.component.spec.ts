import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ci2Part1Component } from './ci2-part1.component';

describe('Ci2Part1Component', () => {
  let component: Ci2Part1Component;
  let fixture: ComponentFixture<Ci2Part1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ci2Part1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ci2Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
