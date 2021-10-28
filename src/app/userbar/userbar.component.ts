import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {

  constructor( private authenticationService:AuthenticationService, 
  private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
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
