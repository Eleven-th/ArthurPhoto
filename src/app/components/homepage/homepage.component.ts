import { Component, OnInit } from '@angular/core';
import { homepage } from 'src/app/models/homepage';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homepage: homepage[];

  constructor(private service1Service: Service1Service) {  }

  ngOnInit() {
    this.getAllHomepages();
  }

    getAllHomepages(): void {
      this.service1Service.getAllHomepages().subscribe(hp => this.homepage = hp );
    }
}
