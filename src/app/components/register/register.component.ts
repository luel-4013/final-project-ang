import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';



import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResortService } from 'src/app/services/resort.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
  styleUrls: ['./bootstrap.min.css', './styles.min.css']

})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;


  Gender: string;
  lifeStatus: string;

  emailFormControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private resortService: ResortService,
    private router: Router
  ) {
    this.RegisterForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      username: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      lifeStatus: ['', Validators.required],
      country: ['', Validators.required], 
      city: ['', Validators.required]

    });
  }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    

  }

}
