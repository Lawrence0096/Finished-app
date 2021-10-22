import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { finalize } from 'rxjs/internal/operators';
import {DashboardAPIService  } from './dashboard-api.service';
import { Customer } from '../_interfaces/customer';
import { CustomerDetails } from '../_interfaces/customer-details';
import { Events } from '../_interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService  {

  constructor(private customerAPIService :DashboardAPIService) { }

  public IsloadingCustomerDetailsData = new BehaviorSubject<boolean>(false);
  public IsLoadingCustomerEventData = new BehaviorSubject<boolean>(false)

  //@ts-ignore
  public selectedCompany2$ = new BehaviorSubject<Events?>(null)
  //@ts-ignore
  public selectedCompany$ = new BehaviorSubject<Customer?>(null);


  getCustomerData(customerID: number): Observable<CustomerDetails>{
      this.IsloadingCustomerDetailsData.next(true);
      return this.customerAPIService.getCustomerDataFromApi(customerID).pipe(finalize(() => this.IsloadingCustomerDetailsData.next(false)))
  }
  //Event new data
   getCustomerEvent ( customerID : number): Observable<any> {
      this.IsLoadingCustomerEventData.next(true)
      return this.customerAPIService.getCustomerEventFromApi(customerID).pipe(finalize(() => this.IsLoadingCustomerEventData.next(false)))
    }

  reloadCustomerEvent(customerID:any): Observable<any>{
    return this.customerAPIService.getCustomerEventFromApi(customerID);
  }
  
  reloadCustomerData(customerID:any): Observable<any>{
    console.log("success", customerID)
    return this.customerAPIService.getCustomerDataFromApi(customerID)
   
  }

  sliderData: BehaviorSubject<any> = new BehaviorSubject<any>(60000);


  //iz app.component.ts pridobi podatkovne parametre (ID,NAME), katere stranimo v Behavior subject
  setSelectedCompany(company :any):any {
        this.selectedCompany$.next(company)
        this.selectedCompany2$.next(company)
      //console.log(company, "hello")
  }
}
