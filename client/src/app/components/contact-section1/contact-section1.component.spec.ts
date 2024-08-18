import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSection1Component } from './contact-section1.component';

describe('ContactSection1Component', () => {
  let component: ContactSection1Component;
  let fixture: ComponentFixture<ContactSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
