import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private dataUrl = 'assets/datas.json';

  constructor(private http:Http) {}

  getData() : Observable<any>{
    return this.http
      .get(this.dataUrl)
      .map(res => { return res.json() });
  }

}