import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Company } from 'src/app/_interfaces/Company';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router : Router) { }

  @Input() listItems: any[] = [];
  @Output() onSelectListItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  //klik na posamezno podjetje
  onClick(item: Company): void 
  {
    this.onSelectListItem.emit(item)
  }
}