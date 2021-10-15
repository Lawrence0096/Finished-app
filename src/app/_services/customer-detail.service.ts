import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { finalize } from 'rxjs/internal/operators';
import { Mock } from '../_interfaces/mock';
import { CustomerAPIService } from './customer-api.service';
import { Customer } from '../_interfaces/customer';
import { CustomerDetails } from '../_interfaces/customer-details';
import { Events } from '../_interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService  {

  constructor(private customerAPIService :CustomerAPIService) { }
  public IsloadingCompanyEventData = new BehaviorSubject<boolean>(false);  
  public IsloadingCustomerDetailsData = new BehaviorSubject<boolean>(false);
  public IsLoadingCustomerEventData = new BehaviorSubject<boolean>(false)

  //@ts-ignore
  public selectedCompany2$ = new BehaviorSubject<Events?>(null)

  //@ts-ignore
  public selectedCompany$ = new BehaviorSubject<Customer?>(null);


  getCustomerTableData(): Observable<Mock[]>{
      this.IsloadingCompanyEventData.next(true);
      return this.customerAPIService.getCustomerEventData().pipe(finalize(() => this.IsloadingCompanyEventData.next(false)))
  }   

  getCustomerId(customerID: number): Observable<CustomerDetails>{
      this.IsloadingCustomerDetailsData.next(true);
      return this.customerAPIService.getCustomerData(customerID).pipe(finalize(() => this.IsloadingCustomerDetailsData.next(false)))
  }




  //Event new data
  getCustomerEventId ( customerID : number): Observable<any> {
    this.IsLoadingCustomerEventData.next(true)
    return this.customerAPIService.getCustomerData2(customerID).pipe(finalize(() => this.IsLoadingCustomerEventData.next(false)))
  }
  




  //iz app.component.ts pridobi podatkovne parametre (ID,NAME), katere stranimo v Behavior subject
  setSelectedCompany(company :any):any {
      this.selectedCompany$.next(company)
      this.selectedCompany2$.next(company)
      //console.log(company, "hello")
  }
}
