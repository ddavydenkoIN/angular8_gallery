import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAboutComponent } from './ag-about.component';

describe('AgAboutComponent', () => {
  let component: AgAboutComponent;
  let fixture: ComponentFixture<AgAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
