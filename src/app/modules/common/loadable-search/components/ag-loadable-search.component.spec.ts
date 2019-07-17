import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgLoadableSearchComponent } from './ag-loadable-search.component';

describe('AgLoadableSearchComponent', () => {
  let component: AgLoadableSearchComponent;
  let fixture: ComponentFixture<AgLoadableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgLoadableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgLoadableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
