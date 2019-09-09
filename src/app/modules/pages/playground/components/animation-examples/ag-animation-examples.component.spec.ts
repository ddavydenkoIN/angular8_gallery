import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAnimationExamplesComponent } from './ag-animation-examples.component';

describe('AgAnimationExamplesComponent', () => {
  let component: AgAnimationExamplesComponent;
  let fixture: ComponentFixture<AgAnimationExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgAnimationExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAnimationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
