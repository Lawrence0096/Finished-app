import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/_interfaces/customer';
import { Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() listItems: any[] = [];
  @Output() onSelectListItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  //klik na posamezno podjetje
  onClick(item: Customer): void 
  {
    this.onSelectListItem.emit(item)
  }
}