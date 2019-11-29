import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { describe } from '../models/describe';
import { homepage } from '../models/homepage';
import { comment } from '../models/comment';
import { author } from '../models/author';
import { pictures } from '../models/pictures';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  private homepageUrl = " http://127.0.0.1:2403/homepage";
  private commetUrl = "http://127.0.0.1:2403/comment"
  private page1Url = "http://127.0.0.1:2403/page1";
  private page2Url = "http://127.0.0.1:2403/page2";
  private page3Url = "http://127.0.0.1:2403/page3";
  private page4Url = "http://127.0.0.1:2403/page4";
  private authorUrl = "http://127.0.0.1:2403/author";
  private picturesUrl = "http://127.0.0.1:2403/pictures";

  constructor(private httpClient: HttpClient) { }

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

  getPictures(): Observable<pictures[]>{
    return this.httpClient.get<pictures[]>(this.picturesUrl);
  }
}
