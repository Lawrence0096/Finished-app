import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import {MatDialog} from '@angular/material/dialog';
import { EventsService } from '../_services/events.service';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {

  user:any;

  constructor( private authenticationService:AuthenticationService, 
    private eventsService: EventsService, 
  private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.eventsService.userName.subscribe(data => {this.user = data, console.log(data)})
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

}
