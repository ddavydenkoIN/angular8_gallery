import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGalleryListComponent } from './ag-gallery-list.component';

describe('AgAboutComponent', () => {
  let component: AgGalleryListComponent;
  let fixture: ComponentFixture<AgGalleryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGalleryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
