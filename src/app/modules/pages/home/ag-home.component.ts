import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { pluck, takeUntil } from "rxjs/operators";

import { AgHomeService } from "./services/ag-home.service";
import { AgUnsubscribe } from "../../../providers/abstract/ag-unsubscribe";
import { AgSearchService } from "../../common/search/services/ag-search.service";

@Component({
  selector: 'ag-home',
  templateUrl: './ag-home.component.html',
  styleUrls: ['./ag-home.component.less']
})
export class AgHomeComponent extends AgUnsubscribe implements OnInit, OnDestroy {

  isNavbarSticky: boolean;

  constructor(
    private homeService: AgHomeService,
    private router: Router,
    private searchService: AgSearchService
  ) {
    super();
  }

  ngOnInit() {
    this.homeService.retrieveCurrentlyOpenedTab()
      .pipe(
          takeUntil(this.destroy$),
          pluck('name'),
      )
      .subscribe((tabName: string) => this.router.navigateByUrl('/home/' + tabName.toLowerCase()));
  }

  ngOnDestroy() {
    this.searchService.updateSearchValue(null);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 400) {
      this.isNavbarSticky = true;
    } else {
      this.isNavbarSticky = false;
    }
  }
}
