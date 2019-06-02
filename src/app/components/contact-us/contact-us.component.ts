import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResortService } from 'src/app/services/resort.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  // styleUrls: ['./contact-us.component.css', 'bootstrap.min.css']
  styleUrls: ['./bootstrap.min.css', './styles.min.css']

})
export class ContactUsComponent implements OnInit {
  contactForm = FormGroup;

  constructor(
    private fb: FormBuilder,
    private resortService: ResortService

  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      phonenumber: [''],
      email: [''],
      messages: ['']
    });
  }

  sendContactusForm(data) {
      // console.log( this.contactForm.value);
      this.resortService.sendContactInfo(data)
      .subscribe(
        res => console.log (res)
      );
      this.resetForm();
  }
resetForm() {
  this.contactForm.reset();
}
}
