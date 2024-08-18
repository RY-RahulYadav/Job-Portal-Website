import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedUserModalComponent } from './applied-user-modal.component';

describe('AppliedUserModalComponent', () => {
  let component: AppliedUserModalComponent;
  let fixture: ComponentFixture<AppliedUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedUserModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
