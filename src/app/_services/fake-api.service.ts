import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {

  constructor(
    private http: HttpClient
  ) { }


  register(user: any) {
    return this.http.post(`/users/register`, user);
}
}



