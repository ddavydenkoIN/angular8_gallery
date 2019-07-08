import { Component, Input, OnInit } from '@angular/core';
import { AgGallery } from "../../../../../../models/gallery";
import { AgOnChange } from "../../../../../../providers/decorators/ag-on-changes.decorator";
import { AgPlaygroundService } from "../../../services/ag-playground.service";

@Component({
  selector: 'ag-gallery',
  templateUrl: './ag-gallery.component.html',
  styleUrls: ['./ag-gallery.component.less']
})
export class AgGalleryComponent implements OnInit {

  @AgOnChange(function(this: AgGalleryComponent, gallery: AgGallery) {
    if (gallery) {
      this.styles = this.agPlaygroundService.convertStyles(gallery.props);
    }

    return gallery;
  })
  @Input()
  gallery: AgGallery;

  styles: any;
  thumbnails = [
    {
      title: 'Uno',
      description: 'Uno',
      thumbnailUrl: 'https://unsplash.it/id/1015/300/300'
    },
    {
      title: 'Dos',
      description: 'Dos',
      thumbnailUrl: 'https://unsplash.it/id/1016/300/300'
    },
    {
      title: 'Tres',
      description: 'Tres',
      thumbnailUrl: 'https://unsplash.it/id/1020/300/300'
    },
    {
      title: 'Quatro',
      description: 'Quatro',
      thumbnailUrl: 'https://unsplash.it/id/1015/300/300'
    },
    {
      title: 'Cinco',
      description: 'Cinco',
      thumbnailUrl: 'https://unsplash.it/id/103/300/300'
    },
    {
      title: 'Seis',
      description: 'Seis',
      thumbnailUrl: 'https://unsplash.it/id/1036/300/300'
    },
    {
      title: 'Siete',
      description: 'Siete',
      thumbnailUrl: 'https://unsplash.it/id/1042/300/300'
    },

    {
      title: 'Ocho',
      description: 'Ocho',
      thumbnailUrl: 'https://unsplash.it/id/1048/300/300'
    },

    {
      title: 'Nueve',
      description: 'Nueve',
      thumbnailUrl: 'https://unsplash.it/id/1071/300/300'
    },
  ];

  constructor(private agPlaygroundService: AgPlaygroundService) { }

  ngOnInit() {
  }

}
