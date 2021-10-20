import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../_interfaces/login';
import { Router } from '@angular/router';
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
 
  invalidLogin = false;
  isSubmitted  =  false;

  constructor(private formBuilder : FormBuilder, private router : Router, private loginservice: AuthenticationService ) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', 
      Validators.required ],
      password: [
      '',  
      [Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(32)]]
  });
        
  }
  get formControls() { return this.loginForm.controls; }

login(){
    if (this.loginservice.authenticate( this.loginForm.value.email, this.loginForm.value.password)){
      console.log(this.loginForm.value);     
      this.router.navigateByUrl('/dashboard')
    }
    else{
      this.isSubmitted = true;
      this.invalidLogin = true;
  }  
}

  onLoginSubmit(){
    console.log(this.user.name )
  }
}


/*login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
    return;
  }
    this.router.navigateByUrl('/dashboard')
}*/