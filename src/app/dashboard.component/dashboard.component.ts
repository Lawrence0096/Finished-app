import { Component, OnInit } from '@angular/core';
import { Mock } from '../_interfaces/mock';

import { MatTableDataSource } from '@angular/material/table';
import { CustomerAPIService } from 'src/app/_services/customer-api.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //spremenljivke za prikaz paginatorja in filtra
  isLoadingTableFeatures = false;
  isLoading = true;

  //Podatki za table
  dashboardTableData!: MatTableDataSource<Mock>
  dashboardTableColumsIndex: string[] = [];

  constructor( private customerAPIservice: CustomerAPIService) { }

  ngOnInit(): void {
    this.customerAPIservice.getEventData()
      .subscribe((res) => {
        this.dashboardTableData = new MatTableDataSource<Mock>(res);
        this.isLoading = false
        this.isLoadingTableFeatures = true
      })
    this.getDynamicIndex()
  }

  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.customerAPIservice.getEventData()
      .subscribe((res) => {
        this.dashboardTableData.filteredData = res;
        this.dashboardTableColumsIndex = Object.getOwnPropertyNames(this.dashboardTableData.filteredData[0]);
        //this.setupTable()
      })
  }

  // prazna metoda pripravljena za klik na tabelo
  public tableRowClick(element: any) {
    console.log(element)
  }
}
