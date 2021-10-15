import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAPIService } from '../_services/customer-api.service';
import { CustomerDetailService } from '../_services/customer-detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  item: any;
  customerList: any[] = [];

  constructor(private router: Router,        
    private customerDetailService:CustomerDetailService,
    private customerAPIservice: CustomerAPIService) { }

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
      this.router.navigate(['/dashboard/stranka', this.item.name])
  }
}
