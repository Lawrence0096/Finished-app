import { Component, OnInit } from '@angular/core';
import { MockData } from './mock-data';
import { TestTableService } from './test-table.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  //dodatki za tabelo
    switchTrue = true;
    switchFalse = false;
    test: any;
  
    // prazna metoda pripravljena za klik na tabelo
      public tableBtnClick(element : any){
      console.log(element)
    }
  
  
  //klik na stranko sproži novi prikaz
      public CompanySelected(x :any){
      this.test = x
      console.log(this.test)
  }
  


  //Podatki za table


  dataHomeTable!: MatTableDataSource<MockData>
  dataHomeColums: string[] = [];


  dataCompanyTable!:MatTableDataSource<MockData>
  dataCompanyColums: string[] = [];


  constructor(private maintableService : TestTableService) { }

  ngOnInit(): void {
    this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataHomeTable = new MatTableDataSource<MockData>(res);
      console.log(this.dataHomeTable);
    })
    this.getDynamicIndex()

    
    

  }
  
  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  getDynamicIndex(): void {
    this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataHomeTable.filteredData = res;
      this.dataHomeColums = Object.getOwnPropertyNames(this.dataHomeTable.filteredData[0]);
      //this.setupTable()
     })
    
  }




}
