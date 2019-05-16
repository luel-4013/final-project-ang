import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
  styleUrls: ['./bootstrap.min.css', './styles.min.css']

})
export class RegisterComponent implements OnInit {

  emailFormControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

  }

}
