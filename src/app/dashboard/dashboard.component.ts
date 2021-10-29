import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardAPIService } from '../_services/dashboard-api.service';
import { CustomerDetailService } from '../_services/customer-detail.service';
import { AuthenticationService } from '../_services/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { EventsService } from '../_services/events.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  
  user:any;
  item: any;
  customerList: any[] = [];

  constructor(private router: Router,        
    private customerDetailService:CustomerDetailService,
    private customerAPIservice: DashboardAPIService, 
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private eventsService: EventsService
    ) { }

  ngOnInit(): void {    
    this.getCustomer()
    this.eventsService.userName.subscribe(data => {this.user = data, console.log(this.user)})
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
    dialogRef.afterClosed();
  }

  //sends clicked data to clickedCompany Service 
  public customerSelected(data: any) {
      this.customerDetailService.setSelectedCompany(data)
      //navigation
      this.item = data
      this.router.navigate(['/dashboard/stranka', this.item.name])
  }
}


