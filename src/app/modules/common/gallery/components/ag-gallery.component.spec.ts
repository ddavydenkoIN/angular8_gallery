import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGalleryComponent } from './ag-gallery.component';

describe('AgGalleryComponent', () => {
  let component: AgGalleryComponent;
  let fixture: ComponentFixture<AgGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
