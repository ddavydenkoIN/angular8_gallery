import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AgRestApiOptions } from "../../models";
import { errorHandler } from "../error-handler";
import { AgRestMethodEnum } from "../../enums";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AgHttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options: AgRestApiOptions = {}) {
    return this.http.get(this.buildUrl(AgRestMethodEnum.GET, url, options.urlParameters), options.request)
      .pipe(
        tap(responce => console.log(this.buildUrl(AgRestMethodEnum.GET, url, options.urlParameters), responce)),
        errorHandler(url)
      );
  }

  private buildUrl(method: AgRestMethodEnum, rawUrl: string, urlParams: Object): string {
    if (!urlParams) {
      return rawUrl;
    }

    return <string>Object
      .entries(urlParams)
      .reduce((acc, [key, value]): string => {
        acc = acc.replace(':' + key, value);
        return acc;
      }, rawUrl);
  }
}
