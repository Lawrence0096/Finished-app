import { Component, EventEmitter, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Input } from '@angular/core';
import { Events } from '../../_interfaces/events';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  @Output() listenToTableClick: EventEmitter<any> = new EventEmitter();

  @Input() displayedColumns: string[] = ["customColumn1"];
  @Input() dataSource!: MatTableDataSource<Events>
  @Input() displayFilter?: boolean;
  @Input() displayPaginator?: boolean;

  selection = new SelectionModel<any>(true, []);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    console.log(this.displayedColumns)
  }

  highlightedRows = [];


 

  ngAfterViewInit() {
    this.setupTable()
  }

  ngOnChanges() {
    this.setupTable()
  }

  selectedRow:any;

  selectedRowIndex = 0;


  //Klik na tabelo metoda ***!
  public getRecord(element: any): void { //ontablerowclick
    //console.log(element)
    this.listenToTableClick.emit(element) //ontablerowclickevent
  }
  public highlight(row: any): void { //ontablerowclick
    //console.log(element)
    this.selectedRowIndex = row.id;
    this.selection.toggle(row)
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

  objArray: [] = []
  

  events : any[] = new Array<any>() ;


  previousSelected: any;
  toggleSelected(obj:any, event:any, alldata:any) {
    
      obj.isSelected = true;
      this.events.push(obj)
      console.log (this.events)
      if (event.ctrlKey) {
        obj.isSelected = !obj.isSelected;
      } 
      
  } 
}


