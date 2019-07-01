import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGalleryThumbnailComponent } from './ag-gallery-list.component';

describe('AgAboutComponent', () => {
  let component: AgGalleryThumbnailComponent;
  let fixture: ComponentFixture<AgGalleryThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGalleryThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGalleryThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
