import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Company } from '../../_interfaces/Company';
import { Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-List',
  templateUrl: './navigationList.component.html',
  styleUrls: ['./navigationList.component.css']
})

export class NavigationListComponent implements OnInit {

  //  warningSign: boolean = false;
  @Input() navBarHeaderImg: any;
  @Input() navBarHeader: any;
  @Input() listItems: any[] = [];

  @Output() onSelectListItem: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  //klik na posamezno stranko
  onSelect(item: Company): void {
    this.onSelectListItem.emit(item)
  }
  //preusmeri uporabnika v /strank/:id
  onSelect2(companyName: any) {
    this.router.navigate(['/stranka', companyName])
  }
}

