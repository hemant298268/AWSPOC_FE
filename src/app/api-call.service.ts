import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  obj;
  result;
  server = 'https://ehuhfr1lhd.execute-api.us-east-2.amazonaws.com/demo_prep/';

  constructor(private http: HttpClient) { }

  getPortfolioList(): Observable<any> {
    console.log(this.http.get( this.server ));
    return this.http.get( this.server );
  }
}
