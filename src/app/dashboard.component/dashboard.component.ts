import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAPIService } from '../_services/customer-api.service';
import { CustomerDetailService } from '../_services/customer-detail.service';
import { AuthenticationService } from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { EventsService } from '../_services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  
  item: any;
  customerList: any[] = [];
  isLoadingUserBar = true;

  constructor(private router: Router,        
    private customerDetailService:CustomerDetailService,
    private customerAPIservice: CustomerAPIService, 
    private authenticationService:  AuthenticationService,
    public dialog: MatDialog
    ) { }


  sliderData:any;

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
  logout(){
    if (this.authenticationService.isUserLoggedIn())
      this.router.navigate(['/login'])
  }

  //1
  openDialog() {
    const dialogRef = this.dialog.open(SettingsMenuComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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


