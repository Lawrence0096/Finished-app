import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Customer } from '../_interfaces/customer';
import { Mock } from 'src/app/_interfaces/mock';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatAccordion} from '@angular/material/expansion';
import { CustomerDetailService } from 'src/app/_services/customer-detail.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';


@Component({
  selector: 'app-customer-detail.',
  templateUrl: './customer-detail..component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  private ngUnsubscribe = new Subject();


  //isOpened presents status for each expandable pannel for each expandable pannel 
  isOpened1: boolean = false;
  isOpened2: boolean = false;
  isOpened3: boolean = false;
  isOpened4: boolean = false;

  // additional features for table (paginator and search filter)
  switchTrue = true;
  switchFalse = false;

  //Progress Bar parameters
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: any
  bufferValue = 75; 

  //Property gets ID and Name of a clicked customer when subscribed
  public _selectedCustomer$ = this.customerDetailService.selectedCompany$.asObservable();
  public _IsLoadingCompanyEventData$ = this.customerDetailService.IsloadingCompanyEventData.asObservable();
  public _isLoadingCustomerDetailsData$ = this.customerDetailService.IsloadingCustomerDetailsData.asObservable();


  //Loading status properties 
  showNoteMessage: boolean = true;
  isLoading: boolean = true;
  
  //Table data propety 
  customerDetailTableData!:MatTableDataSource<Mock>
  dataCompanyColums: string[] = [];

  test: any [] = []

  constructor(
    private customerDetailService : CustomerDetailService
    ) { }


  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
      this._IsLoadingCompanyEventData$.subscribe(data => console.log(data))
        this._selectedCustomer$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res: Customer | null) => {
        if (res !== null) {
          this.getTableData();
          this.getDynamicIndex();        
          this.customerDetailService.getCustomerId(res.id)
            .subscribe(data => {
              //console.log(data)
              res.companyDetails = data;
              //funkcija, ki preveri če so podatki v data.note prazni
              /*if (data.note.data.length > 0) {
                //če podatki niso prazni potem se Note divizija prikaže
                this.showNoteDiv = true
              } else if (data.note.data.length == 0) {
                this.showNoteDiv = false
              } else {
                this.showNoteDiv = true
              }*/
            })
        }
      })
    //end
    //Methods that get Table data and table index   
  }

   getTableData(){
    this.customerDetailService.getCustomerTableData()
    .subscribe((res) => {
      this.customerDetailTableData = new MatTableDataSource<Mock>(res);       
    })
  }
 //Dynamic 
  getDynamicIndex() {
    this.customerDetailService.getCustomerTableData()
    .subscribe((res) =>{
      //filteredData = Array of data that should be rendered by the table, where each object represents one row.
        this.customerDetailTableData.filteredData = res;      
        this.dataCompanyColums = Object.getOwnPropertyNames(this.customerDetailTableData.filteredData[0]);
     })
  }

  //When user clicks on expandable pannel isOpened turn true, when closes it turns false
  //Each method is called (1-4), when a single expandable pannel is clicked 
  expansionStatus1() {
    if (this.isOpened1 = false) {
      this.isOpened1 = true;
    }
    else if (this.isOpened1 = true)
      this.isOpened1 = false
  }
  expansionStatus2() {
    if (this.isOpened2 === false) {
      this.isOpened2 = true;
    }
    else if (this.isOpened2 === true)
      this.isOpened2 = false
  }

  expansionStatus3() {
    if (this.isOpened3 === false) {
      this.isOpened3 = true;
    }
    else if (this.isOpened3 === true)
      this.isOpened3 = false
  }

  expansionStatus4() {
    if (this.isOpened4 === false) {
      this.isOpened4 = true;
    }
    else if (this.isOpened4 === true)
      this.isOpened4 = false
  }
  //Opens all expandable pannels
  openAll(){
    this.isOpened1 = true
    this.isOpened2 = true
    this.isOpened3 = true
    this.isOpened4 = true
  }
  //Closes all expandable pannels
  closeAll(){
    this.isOpened1 = false
    this.isOpened2 = false
    this.isOpened3 = false
    this.isOpened4 = false
  }  
}




