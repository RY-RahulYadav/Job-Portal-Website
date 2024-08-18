import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobSection1Component } from './search-job-section1.component';

describe('SearchJobSection1Component', () => {
  let component: SearchJobSection1Component;
  let fixture: ComponentFixture<SearchJobSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchJobSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJobSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
