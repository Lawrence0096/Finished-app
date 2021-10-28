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

  @Output() tableChange: EventEmitter<any> = new EventEmitter();

  @Input() displayedColumns: string[] = ["customColumn1"];
  @Input() dataSource!: MatTableDataSource<Events>
  @Input() displayFilter?: boolean;
  @Input() displayPaginator?: boolean;

  selection = new SelectionModel<any>(true, []);
  events : any[] = new Array<any>() ;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    console.log(this.displayedColumns)
  }

  ngAfterViewInit() {
    this.setupTable()
  }

  ngOnChanges() {
    this.setupTable()
  }

  public getRecord(row: any): void { //ontablerowclick
    this.selection.toggle(row);
    this.events = this.selection.selected
    this.tableChange.emit(this.events) //ontablerowclickevent
  }

  setupTable() {
    if (this.dataSource !== undefined) {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

//old

/* selectRow2(row:any) {
    this.selection.toggle(row);
    this.events = this.selection.selected
    console.log(this.events)
    const countRed = this.events.filter((element) => element.bgndcolor === "#ff6060").length;
    const countOrange = this.events.filter((element) => element.bgndcolor === "#ff9060").length;
    console.log(countRed)
    if (countRed === 3){
      alert("You have selected 3  very important events")
    }
    if (countOrange === 3){
      alert("You have selected 3 less important events")
    }
  }*/


//
//console.log(this.selection.selected);

//console.log(this.events)
    //console.log(this.events[1].bgndcolor)
    //this.events.forEach(myFuntion)
    
   /* for (let index = 0; index < this.events.length; ++index) {
      var element = this.events[index];
      console.log(element.bgndcolor)
      var counter = 0
     
  }*/

  /*this.events.forEach(function(element){
    element.bgndcolor
  })
  this.events.forEach(function(element){
    element.bgndcolor
  })*/

/*
  toggleSelected(obj:any, event:any, alldata:any) {
    
    obj.isSelected = true;
    this.events.push(obj)
    console.log (this.events)
    if (event.ctrlKey) {
      obj.isSelected = !obj.isSelected;
    } 
    
} 
*/

/*const array = [
  {id: 12, name: 'toto'},
  {id: 12, name: 'toto'},
  {id: 42, name: 'tutu'},
  {id: 12, name: 'toto'},
];

const id = 12;
const count = array.filter((obj) => obj.id === id).length;

console.log(count);*/


 /* if (this.events[index].bgndcolor === "#ff6060") {
        counter++
        console.log(counter)
      }*/

      //if (this.events[index].bgndcolor === "#ff6060" ){
         
          
        //  console.log("you have selected red event")
      //}
