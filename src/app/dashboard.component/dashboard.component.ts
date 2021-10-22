import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardAPIService } from '../_services/dashboard-api.service';
import { CustomerDetailService } from '../_services/customer-detail.service';
import { AuthenticationService } from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  
  item: any;
  customerList: any[] = [];

  constructor(private router: Router,        
    private customerDetailService:CustomerDetailService,
    private customerAPIservice: DashboardAPIService, 
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {    
    this.getCustomer()
  }

  //fills navigation panel with customers from backend //refactor
  getCustomer(): void {
    this.customerAPIservice.getCustomersFromApi()
      .subscribe(res => {
        this.customerList.push(...res)
      })
  }

  logout(){
    if (this.authenticationService.isUserLoggedIn())
      this.router.navigate(['/login'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsMenuComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //sends clicked data to clickedCompany Service 
  public customerSelected(data: any) {
      this.customerDetailService.setSelectedCompany(data)
      //navigation
      this.item = data
      this.router.navigate(['/dashboard/stranka', this.item.name])
  }
}


