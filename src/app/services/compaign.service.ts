import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaignService {

  constructor(private http: HttpClient) { }

  getCompaign(): Observable<any> {
    return this.http.get('./assets/data/compaign.json').pipe(share());
  }
}
