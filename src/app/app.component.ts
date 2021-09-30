import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClickedCompanyDataService } from './_services/clicked-company-data.service';
import { CompanyListDataService } from './_services/companies-list-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'navteh-app';

  //Data for Navigation list
  _companiesList: any[] = [];
  _navBarHeader = "stranke";
  _navBarHeaderImg = "../../../assets/logo.jpg";

  constructor(
    private clickedCompanyService: ClickedCompanyDataService,
    private companyDisplayService: CompanyListDataService
  ) { }


  ngOnInit(): void {
    this.getCompanies()
  }

  //klik na company (stranko) poreduje podatke clicked-company-data servisu 
  public CompanySelected(data: any) {
    console.log('companySelected', data)
    this.clickedCompanyService.setSelectedCompany(data)
  }

  //pridobimo ID in imena podjetij iz backenda, za prikaz v navigacijskem meniju
  getCompanies(): void {
    this.companyDisplayService.getCompanies()
      .subscribe(res => {
        this._companiesList.push(...res)
      })
  }

}

