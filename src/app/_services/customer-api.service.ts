import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/internal/operators';
import { Customer } from '../_interfaces/customer';
import { CustomerDetails } from '../_interfaces/customer-details';
import { Mock } from '../_interfaces/mock';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerAPIService {

  constructor(private http: HttpClient) { }

  private tableInfoUrlSpecific = "https://jsonplaceholder.typicode.com/todos"
  private tableInfoUrlSpecific2 = "https://jsonplaceholder.typicode.com/albums"
  private _endpointURl = 'http://10.2.2.20:8765/customers/'

  getEventData(): Observable<Mock[]> {
    return this.http.get<Mock[]>(this.tableInfoUrlSpecific)
  }

  getCustomerEventData(): Observable<Mock[]> {
    return this.http.get<Mock[]>(this.tableInfoUrlSpecific2) 
  }

  //Maybe something is wrong with backend
  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this._endpointURl).pipe(
      //@ts-ignore
      map(value => [...value.customers])
      );
    }  

  getCustomerData(customerId: number): Observable<CustomerDetails> {
    return this.http.get<CustomerDetails>(`${this._endpointURl}${customerId}`)
  }
}


