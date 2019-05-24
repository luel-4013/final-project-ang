import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  minDate = new Date();
  dateCtrl: FormControl;
  emailFormControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.dateCtrl = new FormControl('', [ Validators.required ]);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }
}
