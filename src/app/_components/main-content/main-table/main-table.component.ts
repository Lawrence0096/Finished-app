import { Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { MockData } from '../mock-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})

export class MainTableComponent implements OnInit {
  //displayedColumns?: string[] = ['userId', 'id', 'title', 'completed']; statična rešitev
  //dataSource!: MatTableDataSource<MockIn> 


  constructor() {}  
  
  @Input()displayedColumns: string[] = []; 
  @Input()dataSource!: MatTableDataSource<MockData> 

  @Output() listenParentHandler : EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() displayFilter ?: boolean;
  @Input() displayPaginator ?: boolean;



  public getRecord(element : any): void{
    //console.log(element)
    this.listenParentHandler.emit(element)
  }




  ngOnInit(): void {
    //nafilamo dataSource
   /* this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataSource = new MatTableDataSource<MockIn>(res);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator
    })
    
    this.getDynamicIndex() */
    this.dataSource.paginator = this.paginator
  }


  setupTable() {
    if(this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
    }
    
  }

  ngAfterViewInit() {
    this.setupTable()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //dinamično definiramo displayedColums
  /*getDynamicIndex(): void {
    this.maintableService.getTableData()
    .subscribe((res) =>{
      this.dataSource.filteredData = res;
      this.displayedColumns = Object.getOwnPropertyNames(this.dataSource.filteredData[0]);
      this.setupTable()
     })
    
  }*/
}




