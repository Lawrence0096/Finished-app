import { Component, OnInit } from '@angular/core';



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

