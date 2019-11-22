import { Component, OnInit } from '@angular/core';
import { describe } from 'src/app/models/describe';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  describes: describe[];
  title = " 如何用手机拍照 ";

  constructor(private service1service: Service1Service) { }
  
  ngOnInit() {
    this.getalldes();
  }

  getalldes(): void {
    this.service1service.getall().subscribe( des => this.describes = des);
  }

}
