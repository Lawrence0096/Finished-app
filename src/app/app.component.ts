import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'navteh-app';

  //Data for Navigation list
  _companiesList: any[] = [];
  _navBarHeader = "stranke";
  _navBarHeaderImg = "../../../assets/logo.jpg";

  constructor() {}


  ngOnInit(): void {

  }
}

