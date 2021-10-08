import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAPIService } from 'src/app/_services/customer-api.service';
import { CustomerDetailService } from './_services/customer-detail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'navteh-app';
  item: any;
  customerList: any[] = [];

  //Data for Navigation list (not used)
  /* _navBarHeader = "stranke";
  _navBarHeaderImg = "../../../assets/logo.jpg"; */

  constructor(private router: Router,        
    private customerDetailService:CustomerDetailService,
    private customerAPIservice: CustomerAPIService
  ) {}

  ngOnInit(): void {
    this.getCustomer()
  }
  //fills navigation panel with customers from backend
  getCustomer(): void {
    this.customerAPIservice.getCustomers()
      .subscribe(res => {
        this.customerList.push(...res)
      })
  }
  //sends clicked data to clickedCompany Service 
  public customerSelected(data: any) {
    //console.log('companySelected', data)
    this.customerDetailService.setSelectedCompany(data)
    //navigation
    this.item = data
    this.router.navigate(['/stranka', this.item.name])
  }
}

