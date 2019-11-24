import { Component, OnInit } from '@angular/core';
import { describe } from 'src/app/models/describe';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {


  describes: describe[];
  constructor(private service1service: Service1Service) { }
  ngOnInit() {
    this.getpage2();
  }


  getpage2(): void {
    this.service1service.getPage2().subscribe(des => this.describes = des);
  }

}
