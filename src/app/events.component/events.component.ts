import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Mock } from '../_interfaces/mock';

import { MatTableDataSource } from '@angular/material/table';
import { EventsService } from '../_services/dashboard.service';
import { Subject } from 'rxjs/internal/Subject';
import { map, repeatWhen, startWith, takeUntil } from 'rxjs/internal/operators';
import { BehaviorSubject, interval, never, Observable, of, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { MatSliderChange } from '@angular/material/slider';
import { Events } from '../_interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  //spremenljivke za prikaz paginatorja in filtra
  isLoadingTableFeatures = false;  
  isLoadingEventTableData$ = this.dashboardService.IsloadingEventTableData.asObservable();

  //Podatki za table
  dashboardTableData!: MatTableDataSource<Events>
  dashboardTableColumsIndex: string[] = [];
  
  constructor(private dashboardService :EventsService) { }


  //test
  private thread_id = new Subject<any>();
  thread_id$ = this.thread_id.asObservable();

  private ngUnsubscribe = new Subject();

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.NekiNeki.unsubscribe();
  }


  getTableData(){
    this.dashboardService.getDashboardEventTableData2().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.dashboardTableData = new MatTableDataSource<Events>(res);
        this.isLoadingTableFeatures = true
      })
  }

  getTableDataReload(){
      this.dashboardService.getDashboardEventTableDataReload().pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          this.dashboardTableData = new MatTableDataSource<Events>(res);
        })


  }



  //https://stackoverflow.com/questions/68082556/angular-mat-table-display-dynamic-data-from-key-value-json-in-each-row

  //Dinamični stolpci
  getDynamicIndex(): void {
    this.dashboardService.getDashboardEventTableData2()
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

  public NekiNeki = new BehaviorSubject<any>(5000);

  //@ts-ignore

  playing: BehaviorSubject<any> = new BehaviorSubject({playing: false, delay: 1000})
  observable$: Observable<any> = this.playing.pipe( switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start with delay of ' + e.delay/1000 + ' sconds')) : of(null)));


  tick: Subscription = new Subscription();
  reset$ = new Subject<void>()

  ngOnInit(): void{
    /*this.subscription = this.everyFiveSeconds.subscribe(()=> {this.getTableData(), this.getDynamicIndex(), console.log(this.x)});
    this.NekiNeki.subscribe( res => {
      console.log(res); 
      setInterval(() => {
        alert(res * 1000); 
      }, res * 1000);
    })*/
   
      /*      
      this.NekiNeki.subscribe(data => {
        playing.next({playing: false, delay: 0})
        playing.next({playing: true, delay: data})
      })

      let playing = new BehaviorSubject({playing: true, delay: 1000})
      const observable = playing.pipe(
        switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start')) : of(null))
      )
      observable.subscribe(data => console.log(data))
      playing.next({playing: true, delay: 2000})
      */


      this.observable$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        console.log(data)
        console.log('api call')
        this.getTableDataReload();
      })

      // szbscribe to the slider change and set a new delay value
      this.NekiNeki.subscribe(data => {
        this.playing.next({playing: true, delay: data})
      })
    
      this.getTableData();
      this.getDynamicIndex();  
      
  }
  formatLabel(value: number) {
    return value;
  }
  onInputChange(event: MatSliderChange){
    //console.log(this.x)
    this.NekiNeki.next(event.value! * 1000)
  } 
}
