import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ag-home',
  templateUrl: './ag-home.component.html',
  styleUrls: ['./ag-home.component.less']
})
export class AgHomeComponent implements OnInit {
  thumbnails: any[];

  isNavbarSticky: boolean;

  ngOnInit() {
    this.thumbnails = [
      {title: 'First', description: 'First Gallery'},
      {title: 'Second', description: 'Second Gallery'},
      {title: 'Third', description: 'Third Gallery'},
      {title: 'Forth', description: 'Forth Gallery'}
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 330) {
      this.isNavbarSticky = true;
    } else {
      this.isNavbarSticky = false;
    }
  }
}
