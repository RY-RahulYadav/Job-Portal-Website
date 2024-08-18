import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ci2Part2Component } from './ci2-part2.component';

describe('Ci2Part2Component', () => {
  let component: Ci2Part2Component;
  let fixture: ComponentFixture<Ci2Part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ci2Part2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ci2Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
