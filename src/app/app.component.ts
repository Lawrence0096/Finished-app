import { Component, OnInit } from '@angular/core';
import { MockIn } from 'src/app/_interfaces/Mock-in';
import { MainTableService } from 'src/app/_services/main-table.service';
import { MatTableDataSource } from '@angular/material/table';
import { NamefetchService } from './_services/namefetch.service';
import { CompanyDisplayService } from './_services/company-display.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navteh-app';
  _companiesList: any [] = [];

  constructor(
    private namefetchService:NamefetchService,
    private companyDisplayService : CompanyDisplayService 
    ) {}
 
    //klik na stranko sproži novi prikaz
    public CompanySelected(data :any){
      console.log('companySelected', data)
      this.namefetchService.setSelectedCompany(data)
    }

    getCompanies(): void{
      this.companyDisplayService.getCompanies()
      .subscribe(res => { 
        this._companiesList.push(...res)
      })
    }



 ngOnInit(): void {
  this.getCompanies() 
 }
}

