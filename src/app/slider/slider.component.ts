import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSlider();
  }

  initSlider() {
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1
        }
      }
    });
  }
}
