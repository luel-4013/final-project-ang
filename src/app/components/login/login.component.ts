import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResortService } from 'src/app/services/resort.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
//  styleUrls: ['./login.component.css']
styleUrls: ['./bootstrap.min.css', './styles.min.css', './login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resortService: ResortService,
  ) { 

    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    });
   }
  

  ngOnInit() {
  }

  registerLogin(data){
    this.resortService.sendLogin(data).subscribe(
      res => console.log(res)
    );
    this.resetForm();
  }
  resetForm(){
    this.loginForm.reset();
  }

}
