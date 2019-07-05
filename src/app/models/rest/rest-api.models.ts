import { HttpHeaders, HttpParams } from "@angular/common/http";

export class AgRestApiRequestOptions {
  headers?: HttpHeaders;
  observe?: any = 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any = 'json';
  withCredentials?: boolean;
}

export class AgRestApiOptions {
  urlParameters?: Object;
  request?: AgRestApiRequestOptions;
}
