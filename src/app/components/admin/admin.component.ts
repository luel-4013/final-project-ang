import { Component, OnInit } from '@angular/core';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: object[] = [];

  constructor(
    private resortService: ResortService
  ) { }

  ngOnInit() {


    this.resortService.getAllAdmins()
    .subscribe(
      res => {
        this.admins = JSON.parse(JSON.stringify(res));
      }
    );
  }

}
