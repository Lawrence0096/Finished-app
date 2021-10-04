import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Company } from '../../_interfaces/Company';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyListDataService } from '../../_services/sideNav-data.service';
import { SelectedCompanyDataService } from 'src/app/_services/selected-company-data.service';


@Component({
  selector: 'app-navigation-List',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.css']
})

export class NavigationListComponent implements OnInit {


  item: any;
  //  warningSign: boolean = false;
  @Input() navBarHeaderImg: any;
  @Input() navBarHeader: any;
  @Input() listItems: any[] = [];
  _companiesList: any[] = [];

  @Output() onSelectListItem: EventEmitter<any> = new EventEmitter();
  @Output() onSelectListener: EventEmitter<any> = new EventEmitter

  constructor(private router: Router,
    private companyDisplayService: CompanyListDataService,
    private clickedCompanyService: SelectedCompanyDataService
  ) { }

  ngOnInit(): void {
    this.getCompanies()
  }
    
  //pridobimo ID in imena podjetij iz backenda, za prikaz v navigacijskem meniju
  getCompanies(): void {
    this.companyDisplayService.getCompanies()
      .subscribe(res => {
        this._companiesList.push(...res)
        console.log('Hello')
      })
  }

  //klik na company (stranko) poreduje podatke clicked-company-data servisu | Navigacija
  public CompanySelected(data: any) {
    console.log('companySelected', data)
    this.clickedCompanyService.setSelectedCompany(data)
    //navigation
    this.item = data
    this.router.navigate(['/stranka', this.item.name])
  }
}


