import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group-bookings',
  templateUrl: './group-bookings.component.html',
  styleUrls: ['./group-bookings.component.css', './bootstrap.min.css', './carousel.css'],
  providers: [ NgbCarouselConfig ]
})
export class GroupBookingsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}
