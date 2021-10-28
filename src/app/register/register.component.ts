import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../_components/snackbar/snackbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private _snackBar: MatSnackBar) { }
  
  isSubmitted: boolean = false;
  isSuccessful: boolean = false;
  durationInSeconds = 5;
  //@ts-ignore
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['',
        Validators.required],
      email: ['',

        [Validators.required,
        Validators.email]
      ],
      password: [
        '',
        //solved bug, by puting validators into [], otherwise min and max lenght won't work
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32)]]
    });
  }
  //common convinience ior accessing property
  get formControls() { return this.registerForm.controls; }

    register(){
      this.isSubmitted = true;
      if (this.registerForm.valid) {
        console.log(this.registerForm.value);
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: this.durationInSeconds * 1000, verticalPosition: 'top',
          panelClass: ['blue-snackbar']
        });
      }
    }
}


