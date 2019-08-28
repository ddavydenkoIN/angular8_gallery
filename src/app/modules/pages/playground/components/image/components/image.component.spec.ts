import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgImageComponent } from './image.component';

describe('AgImageComponent', () => {
  let component: AgImageComponent;
  let fixture: ComponentFixture<AgImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
