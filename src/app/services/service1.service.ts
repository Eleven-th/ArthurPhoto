import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { describe } from '../models/describe';
import { homepage } from '../models/homepage';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  private url = " http://127.0.0.1:2403/photo";
  private homepageUrl = " http://127.0.0.1:2403/homepage";

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.url);
   }
  getHomepage(id: string): Observable<homepage> {
    return this.httpClient.get<homepage>(`${this.homepageUrl}/${id}`);
  }
  getAllHomepages(): Observable<homepage[]> {
    return this.httpClient.get<homepage[]>(this.homepageUrl);

  }
}
