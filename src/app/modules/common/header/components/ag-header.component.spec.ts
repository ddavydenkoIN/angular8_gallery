import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgHeaderComponent } from './ag-header.component';

describe('AgHeaderComponent', () => {
  let component: AgHeaderComponent;
  let fixture: ComponentFixture<AgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
