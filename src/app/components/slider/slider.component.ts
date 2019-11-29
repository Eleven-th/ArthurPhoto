import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { Service1Service } from 'src/app/services/service1.service';
import { pictures } from 'src/app/models/pictures';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '-80vw'
      })),
      state('stayR', style({
        marginLeft: '-80vw'
      })),
      state('moveLeft', style({
        marginLeft: '-80vw'
      })),
      state('moveRight', style({
        marginLeft: '-80vw'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => stay', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => moveRight', animate('500ms ease-in-out', style({
        marginLeft: '0vw'
      })))
    ])
  ]
})
export class SliderComponent implements OnInit {
  pictures: pictures[];
  state = 'stay';
  timer: any;
  constructor(private service1Service: Service1Service) { }

  ngOnInit() {
    this.getPictures();
    this.autoPlay();
  }
  getPictures(): void {
    this.service1Service.getPictures().subscribe( pic => this.pictures = pic);
  }
  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }
  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.pictures.push(this.pictures[0]);
      this.pictures.shift();
    } else if (this.state === 'moveRight') {
      const last = this.pictures.length - 1;
      this.pictures.unshift(this.pictures[last]);
      this.pictures.pop();
      this.state = 'stayR';
    }
  }
  stopPlay(): void {
    clearInterval(this.timer);
  }
  playPre(): void {
    this.state = 'moveRight';
  }
  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }
}
