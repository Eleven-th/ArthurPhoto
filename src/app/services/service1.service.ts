import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { describe } from '../models/describe';
import { homepage } from '../models/homepage';
import { comment } from '../models/comment';
import { author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  private url = " http://127.0.0.1:2403/photo";
  private homepageUrl = " http://127.0.0.1:2403/homepage";
  private commetUrl = "http://127.0.0.1:2403/comment"
  private page1Url = "http://127.0.0.1:2403/page1";
  private page2Url = "http://127.0.0.1:2403/page2";
  private page3Url = "http://127.0.0.1:2403/page3";
  private page4Url = "http://127.0.0.1:2403/page4";
  private authorUrl = "http://127.0.0.1:2403/author";

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.url);
   }

  getAllHomepages(): Observable<homepage[]> {
    return this.httpClient.get<homepage[]>(this.homepageUrl);
  }
  
  updateComment(comment: comment): Observable<comment> {
    return this.httpClient.post<comment> (this.commetUrl, comment);
  }
  getAllComment(): Observable<comment[]> {
    return this.httpClient.get<comment[]>(this.commetUrl);
  }

  getPage1(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.page1Url);
  }
  getPage2(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.page2Url);
  }
  getPage3(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.page3Url);
  }
  getPage4(): Observable<describe[]> {
    return this.httpClient.get<describe[]>(this.page4Url);
  }

  getAuthor(): Observable<author[]> {
    return this.httpClient.get<author[]>(this.authorUrl);
  }
}
