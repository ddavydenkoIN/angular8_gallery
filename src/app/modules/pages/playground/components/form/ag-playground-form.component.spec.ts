import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPlaygroundFormComponent } from './ag-playground-form.component';

describe('AgPlaygroundFormComponent', () => {
  let component: AgPlaygroundFormComponent;
  let fixture: ComponentFixture<AgPlaygroundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgPlaygroundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPlaygroundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
