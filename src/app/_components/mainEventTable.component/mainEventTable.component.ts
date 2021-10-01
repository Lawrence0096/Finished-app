import { Component, OnInit } from '@angular/core';
import { MockData } from '../../_interfaces/mock-data';
import { TableService } from '../../_services/table.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-event-table',
  templateUrl: './mainEventTable.component.html',
  styleUrls: ['./mainEventTable.component.css']
})
export class MainEventTableComponent implements OnInit {

  //spremenljivke za prikaz paginatorja in filtra
  switchTrue = true;
  switchFalse = false;

  //Podatki za table
  dataHomeTable!: MatTableDataSource<MockData>
  dataHomeColums: string[] = [];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getEventData()
      .subscribe((res) => {
        this.dataHomeTable = new MatTableDataSource<MockData>(res);
        console.log(this.dataHomeTable);
      })
    this.getDynamicIndex()
  }

  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.tableService.getEventData()
      .subscribe((res) => {
        this.dataHomeTable.filteredData = res;
        this.dataHomeColums = Object.getOwnPropertyNames(this.dataHomeTable.filteredData[0]);
        //this.setupTable()
      })
  }

  // prazna metoda pripravljena za klik na tabelo
  public tableBtnClick(element: any) {
    console.log(element)
  }
}
