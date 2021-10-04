import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetails } from '../_interfaces/Company-details';
import { delay } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyPageService {


  constructor(private http: HttpClient) { }
  
  // customViewUrl =  'http://10.2.2.20:8765/customers/1';
  private _endpointURl = 'http://10.2.2.20:8765/customers/'



  /*
  getcustomer(): Observable<CompanyDetails[]>{
    return this.http.get<CompanyDetails[]>(this.customViewUrl)
  }

  getCustomer(id: number): Observable<CompanyDetails>{
    return this.http.get<CompanyDetails>(this.customViewUrl)
  }
  */

  //Pridobitev podatkov o specifičnem podjetju iz backend serverja
  getCustomers(customerId: number): Observable<CompanyDetails>{
    return this.http.get<CompanyDetails>(`${this._endpointURl}${customerId}`).pipe(delay(1000))
  }  
}
