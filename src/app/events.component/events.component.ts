import { Component, OnDestroy, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventsService } from '../_services/events.service';
import { Subject } from 'rxjs/internal/Subject';
import { startWith, takeUntil } from 'rxjs/internal/operators';
import { BehaviorSubject, interval, Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { Events } from '../_interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  isLoadingTableFeatures = false;  
  isLoadingEventTableData$ = this.eventsService.IsloadingEventTableData.asObservable();
  dashboardTableData!: MatTableDataSource<Events>
  dashboardTableColumsIndex: string[] = [];
  
  constructor(private eventsService :EventsService) { }
  private ngUnsubscribe = new Subject();

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.tickNumber.unsubscribe();
  }

  getTableData(){
    this.eventsService.getDashboardServiceEvents()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dashboardTableData = new MatTableDataSource<Events>(res);
        this.isLoadingTableFeatures = true
      })
  }

  getTableDataReload(){
      this.eventsService.reloadEvents()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          this.dashboardTableData = new MatTableDataSource<Events>(res);
        })
  }
  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.eventsService.getDashboardServiceEvents()
      .subscribe((res) => {
        this.dashboardTableData.filteredData = res;
        this.dashboardTableColumsIndex = Object.getOwnPropertyNames(this.dashboardTableData.filteredData[0]);
      })
  }

  public tableRowClick(element: any) {
    console.log(element)
  }

  private tickNumber = new BehaviorSubject<any>(60000);
  playing2: BehaviorSubject<any> = new BehaviorSubject({playing: false, delay: 1000})
  observable2$: Observable<any> = this.playing2.pipe( switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start with delay of ' + e.delay/1000 + ' sconds')) : of(null)));


  tick: Subscription = new Subscription();

  ngOnInit(): void{   

    this.eventsService.sliderData.subscribe((res) => { this.tickNumber.next(res * 1000), console.log(res, this.tickNumber)} )

      this.observable2$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.getTableDataReload();
        console.log("reload:", data);
      })

      this.tickNumber.subscribe(data => {
        this.playing2.next({playing : true, delay: data})
      })

      
    
      this.getTableData();
      this.getDynamicIndex();  
  }


 
}
 