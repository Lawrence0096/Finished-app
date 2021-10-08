import { Component, OnDestroy, OnInit } from '@angular/core';
import { Mock } from '../_interfaces/mock';

import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../_services/dashboard.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  //spremenljivke za prikaz paginatorja in filtra
  isLoadingTableFeatures = false;
  
  isLoadingEventTableData$ = this.dashboardService.IsloadingEventTableData.asObservable();

  //Podatki za table
  dashboardTableData!: MatTableDataSource<Mock>
  dashboardTableColumsIndex: string[] = [];

  constructor(
    
    private dashboardService :DashboardService
    ) { }

  ngOnInit(): void{
    this.getTableData();
    this.getDynamicIndex();
  }

  private ngUnsubscribe = new Subject();

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getTableData(){
    this.dashboardService.getDashboardEventTableData().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dashboardTableData = new MatTableDataSource<Mock>(res);
        this.isLoadingEventTableData$.subscribe()
        this.isLoadingTableFeatures = true
      })
  }
  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.dashboardService.getDashboardEventTableData()
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
