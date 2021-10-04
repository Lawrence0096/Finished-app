import { Component, OnInit, ViewChild } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { CompanyPageService } from '../../_services/company-page-data.service';
import { SelectedCompanyDataService } from '../../_services/selected-company-data.service'
import { Company } from '../../_interfaces/Company';
import {MockIn} from '../../_interfaces/Mock-in'
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatAccordion} from '@angular/material/expansion';
import { TableService } from '../../_services/table.service'

@Component({
  selector: 'app-company-view',
  templateUrl: './companyPage.component.html',
  styleUrls: ['./companyPage.component.css']
})
export class CompanyPageComponent implements OnInit {

  @ViewChild(MatAccordion) accordion?: MatAccordion;

  //isOpened predstavlja posamezni expandable zavihek
  isOpened1: boolean = false
  isOpened2: boolean = false
  isOpened3: boolean = false
  isOpened4: boolean = false

  @Input() item = '';

  // Vklopimo paginator ali filter za compotento table
  switchTrue = true;
  switchFalse = false;

  //Progress Bar parameters
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: any
  bufferValue = 75; 

  //spremenljivka dobi podatke o podjetju (ID, Name)
  public _selectedCompany$ = this.clickedCompanyDataService.selectedCompany$.asObservable();
  
  //Prikaz za Note iz backenda
  showNoteDiv: boolean = true

  isLoading: boolean = true;
  isLoading2: boolean = true;

  dataCompanyTable!:MatTableDataSource<MockIn>
  dataCompanyColums: string[] = [];

  constructor(
    private tableService: TableService,
    private customViewService: CompanyPageService,
    private clickedCompanyDataService: SelectedCompanyDataService) { }

  ngOnInit(): void {
    this._selectedCompany$
      .subscribe((res: Company | null) => {
        if (res !== null) {
          this.customViewService.getCustomers(res.id)
            .subscribe(data => {
              res.companyDetails = data;              
              this.isLoading = false;
              //funkcija, ki preveri če so podatki v data.note prazni
              if (data.note.length > 0) {
                //če podatki niso prazni potem se Note divizija prikaže
                this.showNoteDiv = true
              } else if (data.note.length == 0) {
                this.showNoteDiv = false
              } else {
                this.showNoteDiv = true
              }
            })
        }
      })
//Podatki za tabelo  
    this.tableService.getCompanyEventData()
      .subscribe((res) => {
        this.dataCompanyTable = new MatTableDataSource<MockIn>(res);
      })
    this.getDynamicIndex()
    
  }
 //dinamični stolpci
  getDynamicIndex() {
    this.tableService.getCompanyEventData()
    .subscribe((res) =>{
      //filteredData = Array of data that should be rendered by the table, where each object represents one row.
      this.dataCompanyTable.filteredData = res;      
      this.dataCompanyColums = Object.getOwnPropertyNames(this.dataCompanyTable.filteredData[0]);
      this.isLoading2 = false;
      //this.setupTable()
     })
  }
  //expandable tabs prvi, drugi, tretji, četrti
  stayOpened(){
      this.isOpened1 = true
  }
  stayOpened2(){
    this.isOpened2 = true
    if (this.isOpened2 = true) {
      this.isOpened2 = false
    } 
  }
  stayOpened3(){
    this.isOpened3 = true
    if (this.isOpened3 = true) {
      this.isOpened3 = false
    } 
    console.log(this.isOpened3)
  }
  stayOpened4(){
    this.isOpened4 = true
    
  }

  closeOpened4(x : any){
    
  }

  //odpri vse razšiljive zavihke
  openAll(){
    this.isOpened1 = true
    this.isOpened2 = true
    this.isOpened3 = true
    this.isOpened4 = true
  }
  //zapri vse razšiljive zavihke
  closeAll(){
    this.isOpened1 = false
    this.isOpened2 = false
    this.isOpened3 = false
    this.isOpened4 = false

  }
}




