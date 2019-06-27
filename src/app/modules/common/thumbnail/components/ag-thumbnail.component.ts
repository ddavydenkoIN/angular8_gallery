import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-thumbnail',
  templateUrl: './ag-thumbnail.component.html',
  styleUrls: ['./ag-thumbnail.component.less']
})
export class AgThumbnailComponent {

  @Input()
  description: string;

  @Input()
  title: string;
}
