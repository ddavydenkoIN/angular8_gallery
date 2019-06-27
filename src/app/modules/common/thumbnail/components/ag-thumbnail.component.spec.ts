import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgThumbnailComponent } from './ag-gallery-thumbnail.component';

describe('AgGalleryThumbnailComponent', () => {
  let component: AgThumbnailComponent;
  let fixture: ComponentFixture<AgThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
