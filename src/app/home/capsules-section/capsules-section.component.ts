import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-capsules-section',
  templateUrl: './capsules-section.component.html',
  styleUrls: ['./capsules-section.component.scss']
})
export class CapsulesSectionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="./../../../assets/prev.svg"/>', '<img src="./../../../assets/next.svg"/>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
