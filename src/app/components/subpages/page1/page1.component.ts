import { Component, OnInit } from '@angular/core';
import { describe } from 'src/app/models/describe';
import { Service1Service } from 'src/app/services/service1.service';
import { author } from 'src/app/models/author';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  describes: describe[];
  authors: author[];

  constructor(private service1service: Service1Service) { }
  ngOnInit() {
    this.getpage1();
    this.getauthor();
  }


  getpage1(): void {
    this.service1service.getPage1().subscribe(des => this.describes = des);
  }

  getauthor(): void {
    this.service1service.getAuthor().subscribe(aur => this.authors = aur);
  }
}
