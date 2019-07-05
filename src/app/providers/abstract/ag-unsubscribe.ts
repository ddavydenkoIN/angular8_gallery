import { OnDestroy } from "@angular/core";

import { Subject } from "rxjs";

export class AgUnsubscribe implements OnDestroy {
  destroy$: Subject<any> = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
