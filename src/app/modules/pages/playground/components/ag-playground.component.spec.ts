import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPlaygroundComponent } from './ag-playground.component';

describe('AgPlaygroundComponent', () => {
  let component: AgPlaygroundComponent;
  let fixture: ComponentFixture<AgPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
