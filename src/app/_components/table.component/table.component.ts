import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MockData } from 'src/app/_interfaces/mock-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  @Output() listenToTableClick: EventEmitter<any> = new EventEmitter();

  @Input() displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<MockData>
  @Input() displayFilter?: boolean;
  @Input() displayPaginator?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
    this.setupTable()
  }

  //Klik na tabelo metoda ***!
  public getRecord(element: any): void { //ontablerowclick
    //console.log(element)
    this.listenToTableClick.emit(element) //ontablerowclickevent
  }

  //metoda, ki poskrbi da se sort in paginator loadata, če ni dataSource prazen
  setupTable() {
    if (this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
    }
  }

  //metoda za filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




