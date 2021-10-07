import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { finalize } from 'rxjs/internal/operators';
import { Mock } from '../_interfaces/mock';
import { CustomerAPIService } from './customer-api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor(private customerAPIService :CustomerAPIService) { }

  public IsloadingCompanyEventData = new BehaviorSubject<boolean>(false)

  getCustomerTableData(): Observable<Mock[]>{
      this.IsloadingCompanyEventData.next(true)
      return this.customerAPIService.getCustomerEventData().pipe(finalize(() => this.IsloadingCompanyEventData.next(false)))
  }    
}
