import { Component, OnInit } from '@angular/core';
import { MockIn } from 'src/app/_interfaces/Mock-in';
import { MainTableService } from 'src/app/_services/main-table.service';
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


  dataHomeTable!: MatTableDataSource<MockIn>
  dataHomeColums: string[] = [];


  dataCompanyTable!:MatTableDataSource<MockIn>
  dataCompanyColums: string[] = [];


  constructor(private maintableService : MainTableService) { }

  ngOnInit(): void {
    this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataHomeTable = new MatTableDataSource<MockIn>(res);
      console.log(this.dataHomeTable);
    })
    this.getDynamicIndex()

    
    

  }
  


  getDynamicIndex(): void {
    this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataHomeTable.filteredData = res;
      this.dataHomeColums = Object.getOwnPropertyNames(this.dataHomeTable.filteredData[0]);
      //this.setupTable()
     })
    
  }




}
