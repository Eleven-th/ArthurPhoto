import { Component, OnInit } from '@angular/core';
import { describe } from 'src/app/models/describe';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  describes: describe[];
  constructor(private service1service: Service1Service) { }
  ngOnInit() {
    this.getpage4();
  }


  getpage4(): void {
    this.service1service.getPage4().subscribe(des => this.describes = des);
  }
}
