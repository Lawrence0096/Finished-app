import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  //@ts-ignore
  loginForm: FormGroup;
 
  inputVar: string = ""
  invalidLogin = false;
  isSubmitted = false;

  constructor(private formBuilder : FormBuilder, 
  private router : Router, 
  private loginservice: AuthenticationService ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.required],
      password: [
        '',
        //solved bug, by puting validators into [], otherwise min and max lenght won't work
        [Validators.required,
         Validators.minLength(3), 
         Validators.maxLength(32)]]
    });        
  }

  invalidLoginYis: BehaviorSubject<any> = new BehaviorSubject<any>(false);


  get formControls() { return this.loginForm.controls; }

  login() {
    if (this.loginservice.authenticate(this.loginForm.value.email,this.loginForm.value.password)) {
      console.log(this.loginForm.value);
      this.router.navigateByUrl('/dashboard')
    }
    else {
      this.isSubmitted = true;
      this.invalidLogin = true;
    }
  }

 removeError(){
  this.isSubmitted = false
  this.loginForm.reset();
 }

}




/* OLD CODE login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
    return;
  }
    this.router.navigateByUrl('/dashboard')
}*/