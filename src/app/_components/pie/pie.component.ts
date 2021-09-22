import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  surveyData = [
    { name: 'Bikes', value: 105000 },
    { name: 'Cars', value: 55000 },
    { name: 'Trucks', value: 15000 },
    { name: 'Scooter', value: 150000 },
    { name: 'Bus', value: 20000 }
  ];

  









  constructor() { }

  ngOnInit(): void {
  }

  
}
