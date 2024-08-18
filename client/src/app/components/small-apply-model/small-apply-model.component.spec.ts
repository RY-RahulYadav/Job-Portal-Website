import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallApplyModelComponent } from './small-apply-model.component';

describe('SmallApplyModelComponent', () => {
  let component: SmallApplyModelComponent;
  let fixture: ComponentFixture<SmallApplyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallApplyModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallApplyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
