import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ag-loadable-search',
  templateUrl: './ag-loadable-search.component.html',
  styleUrls: ['./ag-loadable-search.component.less']
})
export class AgLoadableSearchComponent implements OnInit {

  showSearch = false;
  isIconVisible = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  expandHostElement() {
    this.renderer.addClass(this.el.nativeElement, 'expanded');
    this.isIconVisible = false;

    setTimeout(() => this.showSearch = true, 1000);
  }

}
