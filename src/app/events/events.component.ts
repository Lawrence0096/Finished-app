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

  //loading booleans
  isLoadingTableFeatures = false;  
  isLoadingEventTableData$ = this.eventsService.IsloadingEventTableData.asObservable();

  //CustomerTableData
  dashboardTableData!: MatTableDataSource<Events>
  //index for colums
  dashboardTableColumsIndex: string[] = [];

  eventsTableRowData : any[] = new Array<any>() ;

  //Properties for refresh bar
  private reloadIntervalNumber = new BehaviorSubject<any>(60000);
  playing: BehaviorSubject<any> = new BehaviorSubject({playing: false, delay: 1000})

  //when this playing2 gets new value from reloadIntervalNumber switchmap restarts counter
  observable$: Observable<any> = this.playing
  .pipe( switchMap(e => !!e.playing ? interval(e.delay).pipe(startWith('start with delay of ' + e.delay/1000 + ' sconds')) : of(null)));

  constructor(private eventsService :EventsService) { }
  private ngUnsubscribe = new Subject();

  ngOnInit(): void{   
    //subscribes selected slider value (multipled by 1000) to reloadIntervalNumber
    this.eventsService.sliderData.subscribe((res) => 
    { this.reloadIntervalNumber.next(res * 1000), console.log(res, this.reloadIntervalNumber)} )
      
    //events table gets reloaded
    this.observable$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.getTableDataReload();
        console.log("reload:", data);
      })
      //playing2 gets delay data which is slider value
      this.reloadIntervalNumber.subscribe(data => {
        this.playing.next({playing : true, delay: data})
      })
      this.getTableData();
      this.getDynamicIndex();  
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.reloadIntervalNumber.unsubscribe();
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
       // this.dashboardTableData.filteredData = res; 
        this.dashboardTableColumsIndex = Object.getOwnPropertyNames(this.dashboardTableData.filteredData[0]);
      })
  }
  eventsRowClick(element: any) {
    this.eventsTableRowData = element
    const countRed = this.eventsTableRowData.filter((element) => element.bgndcolor === "#ff6060").length;
    const countOrange = this.eventsTableRowData.filter((element) => element.bgndcolor === "#ff9060").length;
    
    if (countRed === 3){
      alert("You have selected 3  very important events")
    }
    if (countOrange === 3){
      alert("You have selected 3 less important events")
    }
  }
}
 