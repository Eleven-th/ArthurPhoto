import { Component, OnInit } from '@angular/core';
import { describe } from 'src/app/models/describe';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  describes: describe[];
  constructor(private service1service: Service1Service) { }
  ngOnInit() {
    this.getpage3();
  }


  getpage3(): void {
    this.service1service.getPage3().subscribe(des => this.describes = des);
  }
}
