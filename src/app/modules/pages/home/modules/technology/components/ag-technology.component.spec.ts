import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTechnologyComponent } from './ag-technology.component';

describe('AgTechnologyComponent', () => {
  let component: AgTechnologyComponent;
  let fixture: ComponentFixture<AgTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
