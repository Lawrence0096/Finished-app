import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../_interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  //@ts-ignore
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', 
      Validators.required ],
      password: [
      '',  
      [Validators.required, 
      Validators.minLength(6), 
      Validators.maxLength(32)]]
  });
        
  }
  get formControls() { return this.loginForm.controls; }

login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
    return;
  }
    this.router.navigateByUrl('/dashboard')
}

  onLoginSubmit(){
    console.log(this.user.name )
  }
}
