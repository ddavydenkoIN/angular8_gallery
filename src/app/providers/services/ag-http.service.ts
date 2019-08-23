import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { AgRestApiOptions } from "../../models";
import { errorHandler } from "../error-handler";
import { AgRestMethodEnum } from "../../enums";
import { AgModelMapper } from "../abstract/model-mapper";

@Injectable({
  providedIn: 'root'
})
export class AgHttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options: AgRestApiOptions = {}, modelClass?: any): Observable<any> {
    return this.http.get(this.buildUrl(AgRestMethodEnum.GET, url, options.urlParameters), options.request)
      .pipe(
        map(responce => modelClass ? new AgModelMapper(modelClass).map(responce) : responce),
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
