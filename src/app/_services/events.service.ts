import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { finalize } from 'rxjs/internal/operators';
import { DashboardAPIService } from './dashboard-api.service';
import { Events } from '../_interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  

  constructor(private dashboardAPIService: DashboardAPIService) { }

  public IsloadingEventTableData = new BehaviorSubject<boolean>(false);

  getDashboardServiceEvents(): Observable<Events[]> {
    this.IsloadingEventTableData.next(true);
    return this.dashboardAPIService.getEventsFromApi()
    .pipe(finalize(() => this.IsloadingEventTableData.next(false)));
  }
  reloadEvents(): Observable<Events[]> {
    return this.dashboardAPIService.getEventsFromApi();
  }

//refactor

  sliderData: BehaviorSubject<any> = new BehaviorSubject<any>(60000);
  userName: BehaviorSubject<any> = new BehaviorSubject<any>("Hello");
  
}
