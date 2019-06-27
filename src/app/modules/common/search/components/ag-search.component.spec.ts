import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSearchComponent } from './ag-search.component';

describe('AgSearchComponent', () => {
  let component: AgSearchComponent;
  let fixture: ComponentFixture<AgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
