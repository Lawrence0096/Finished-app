import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Customer } from '../_interfaces/customer';
import { CustomerDetails } from '../_interfaces/customer-details';
import { map } from 'rxjs/internal/operators/map';
import { Events } from '../_interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class DashboardAPIService {

  constructor(private http: HttpClient) { }

  private _endpointURl = 'http://10.2.2.20:8765/customers/'
  private _eventsEndPoint = 'http://10.2.2.20:8765/events/'

  getEventsFromApi(): Observable<Events[]> {
    return this.http.get<Events[]>(this._eventsEndPoint) 
  }
  
  getCustomerEventFromApi(customerId: number): Observable<Events> {
    return this.http.get<Events>(`${this._eventsEndPoint}${customerId}`)
  }
   
  //Maybe something is wrong with backend
  getCustomersFromApi(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this._endpointURl).pipe(
      //@ts-ignore
      map(value => [...value.customers])
      );
    }  

  getCustomerDataFromApi(customerId: number): Observable<CustomerDetails> {
    return this.http.get<CustomerDetails>(`${this._endpointURl}${customerId}`)
  }

}


