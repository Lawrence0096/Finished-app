import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) {}

  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username', username)
      return true
    } else { return false }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('currentUser')
    console.log(localStorage)
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('currentUser')
  }

  login(username: string , password: string){
    return this.http.post<any>(`/users/authenticate`, {username, password})
    .pipe(map(user =>{
      if (user){
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user)
      }
      return user   
    } 
    
      
  ))


  }


}
