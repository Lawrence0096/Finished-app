import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { finalize } from 'rxjs/internal/operators';
import { CustomerAPIService } from './customer-api.service';
import { Mock } from '../_interfaces/mock';
import { Events } from '../_interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private customerAPIService :CustomerAPIService) { }

  public IsloadingEventTableData = new BehaviorSubject<boolean>(false);

    getDashboardEventTableData(): Observable<Mock[]> {
        this.IsloadingEventTableData.next(true);
        return this.customerAPIService.getEventData().pipe(finalize(() => this.IsloadingEventTableData.next(false)));
    }
    getDashboardEventTableData2(): Observable<Events[]> {
        this.IsloadingEventTableData.next(true);
        return this.customerAPIService.getEventData2().pipe(finalize(() => this.IsloadingEventTableData.next(false)));
    }
}
