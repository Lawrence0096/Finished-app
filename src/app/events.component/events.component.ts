import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Mock } from '../_interfaces/mock';

import { MatTableDataSource } from '@angular/material/table';
import { EventsService } from '../_services/dashboard.service';
import { Subject } from 'rxjs/internal/Subject';
import { map, repeatWhen, startWith, takeUntil } from 'rxjs/internal/operators';
import { BehaviorSubject, interval, never, Observable, of, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { MatSliderChange } from '@angular/material/slider';
import { Events } from '../_interfaces/events';
import { RefreshRateSliderComponent } from '../_components/refresh-rate-slider/refresh-rate-slider.component';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {


  //spremenljivke za prikaz paginatorja in filtra
  isLoadingTableFeatures = false;  
  isLoadingEventTableData$ = this.eventsService.IsloadingEventTableData.asObservable();

  //Podatki za table
  dashboardTableData!: MatTableDataSource<Events>
  dashboardTableColumsIndex: string[] = [];
  
  constructor(private eventsService :EventsService) { }


  //test
  private thread_id = new Subject<any>();
  thread_id$ = this.thread_id.asObservable();

  private ngUnsubscribe = new Subject();

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    //this.NekiNeki.unsubscribe(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.tickNumber.unsubscribe();
  }


  getTableData(){
    this.eventsService.getDashboardEventTableData2().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dashboardTableData = new MatTableDataSource<Events>(res);
        this.isLoadingTableFeatures = true
      })
  }

  getTableDataReload(){
      this.eventsService.getDashboardEventTableDataReload().pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          this.dashboardTableData = new MatTableDataSource<Events>(res);
        })


  }



  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.eventsService.getDashboardEventTableData2()
      .subscribe((res) => {
        this.dashboardTableData.filteredData = res;
        this.dashboardTableColumsIndex = Object.getOwnPropertyNames(this.dashboardTableData.filteredData[0]);
        //this.setupTable()
      })
  }

  // prazna metoda pripravljena za klik na tabelo
  public tableRowClick(element: any) {
    console.log(element)
  }

  //public NekiNeki = new BehaviorSubject<any>(5000);
  private tickNumber = new BehaviorSubject<any>(60000);
  playing2: BehaviorSubject<any> = new BehaviorSubject({playing: false, delay: 1000})
  observable2$: Observable<any> = this.playing2.pipe( switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start with delay of ' + e.delay/1000 + ' sconds')) : of(null)));


//  playing: BehaviorSubject<any> = new BehaviorSubject({playing: false, delay: 1000})
//observable$: Observable<any> = this.playing.pipe( switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start with delay of ' + e.delay/1000 + ' sconds')) : of(null)));

  tick: Subscription = new Subscription();
  


 /*
  formatLabel(value: number) {
    return value;
  }

  onInputChange(event: MatSliderChange){
    //console.log(this.x)
    this.NekiNeki.next(event.value! * 1000)
  } */

  ngOnInit(): void{   

    this.eventsService.sliderData.subscribe((res) => { this.tickNumber.next(res * 1000), console.log(res, this.tickNumber)} )


      /*
      this.observable$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.getTableDataReload();
      })*/

      this.observable2$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.getTableDataReload();
        console.log("reload:", data);
      })

      /*
      this.NekiNeki.subscribe(data => {
        this.playing.next({playing: true, delay: data})
      })*/

      this.tickNumber.subscribe(data => {
        this.playing2.next({playing : true, delay: data})
      })
    
      this.getTableData();
      this.getDynamicIndex();  
  }

}
 