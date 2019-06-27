import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgNavbarComponent } from './ag-navbar.component';

describe('AgNavbarComponent', () => {
  let component: AgNavbarComponent;
  let fixture: ComponentFixture<AgNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
