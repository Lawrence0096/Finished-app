import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Router } from '@angular/router';
import { CustomerAPIService } from 'src/app/_services/customer-api.service';
import { CustomerDetailService } from './_services/customer-detail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'navteh-app';
  item: any;
  customerList: any[] = [];


  constructor( ) {}

  ngOnInit(): void {
    
  }


}

