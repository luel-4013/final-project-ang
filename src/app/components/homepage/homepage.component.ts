import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', './bootstrap.min.css', './carousel.css'],
  providers: [ NgbCarouselConfig ]
})
export class HomepageComponent implements OnInit {
    // options = {};

  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    // var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems, options);
  }

}
