import { Component, OnInit, ViewChild } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { CustomViewService } from '../../_services/company-data.service';
import { ClickedCompanyDataService } from '../../_services/clicked-company-data.service'
import { Company } from '../../_interfaces/Company';
import {MockIn} from '../../_interfaces/Mock-in'
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatAccordion} from '@angular/material/expansion';
import { TableService } from '../tableModule/_services/table.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './companyView.component.html',
  styleUrls: ['./companyView.component.css']
})
export class CompanyViewComponent implements OnInit {

  @ViewChild(MatAccordion) accordion?: MatAccordion;

  //isOpened predstavlja posamezni expandable zavihek
  isOpened1?: boolean
  isOpened2?: boolean
  isOpened3?: boolean
  isOpened4?: boolean

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

  dataCompanyTable!:MatTableDataSource<MockIn>
  dataCompanyColums: string[] = [];

  constructor(
    private tableService: TableService,
    private customViewService: CustomViewService,
    private clickedCompanyDataService: ClickedCompanyDataService) { }

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
      //this.setupTable()
     })
  }
  //expandable tabs prvi, drugi, tretji, četrti
  stayOpened(){
    this.isOpened1 = true
  }
  stayOpened2(){
    this.isOpened2 = true
  }
  stayOpened3(){
    this.isOpened3 = true
  }
  stayOpened4(){
    this.isOpened4 = true
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




