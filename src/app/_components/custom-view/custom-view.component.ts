import { Component, OnInit } from '@angular/core';
import { MainTableService } from 'src/app/_services/main-table.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { CompanyDetails } from 'src/app/_interfaces/Company-details';
import { CustomViewService } from 'src/app/_services/custom-view.service';
import { NamefetchService } from 'src/app/_services/namefetch.service';
import { Company } from 'src/app/_interfaces/Company';
import { MockIn } from 'src/app/_interfaces/Mock-in';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/internal/operators/map';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';



@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent implements OnInit {

  //PIE graph test
  GraphData: any [] = [];

  surveyData = [
    { name: 'Bikes', value: 105000 },
    { name: 'Cars', value: 55000 },
    { name: 'Trucks', value: 15000 },
    { name: 'Scooter', value: 150000 },
    { name: 'Bus', value: 20000 }
  ];
  // @ts-ignore
  /*    customColors = [
        { 
          name: 'Free',
          value: '#ADFF2F'
        }
    ];*/

  slicer: number = 2




  //color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: any
  bufferValue = 75;




  public _selectedCompany$ = this.namefetchService.selectedCompany$.asObservable();
  

  public selectedCompanyArray: any

  constructor(
    private  maintableService : MainTableService, 
    private customViewService : CustomViewService, 
    private namefetchService : NamefetchService) {  }
 

  mainTableInfo: any [] =[];

  @Input() item = '';

  switchTrue = true;
  switchFalse = false;

  //Prikaz za Note iz backenda
  noDataSwitch: boolean = true

  companyDetail: any = {};
  companyDetail2: any = {};
  sideNavData : any ;  

  isLoading: boolean = true;

  dataCompanyTable!:MatTableDataSource<MockIn>
  dataCompanyColums: string[] = [];


  //Pridobi podatke iz APIja, ki bo predstavilo specifične podatke za uporabnika
  getCustomViewDetails(): void {
    this.customViewService.getcustomer().subscribe
    (res => { this.companyDetail = res; console.log(this.companyDetail)})
  }
  
  //Pridobi object, ko uporabnik klikne na uporabnika na SideNavu
  getNamesSideNav(): void {
    //this.namefetchService.myMethod$?.subscribe((res) => {this.sideNavData = res, console.log(this.sideNavData, 'Hello')})
  }


  ngOnInit(): void {
    //specifični podatki stranke
     this._selectedCompany$
    .subscribe((res: Company | null) => {
        if(res !== null) {
          this.customViewService.getCustomers(res.id)
          .subscribe(data => {
            console.log(data.system.ram.free)
            res.companyDetails = data; 
            this.GraphData.push(
              {name: "Free", value : data.system.ram.free / 1000},
              {name: "Installed", value : data.system.ram.installed / 1000}
            )  
            
            /*company.companyDetails.system.drives.forEach(drive => {
             @ts-ignore
            console.log(drive)
            }
            )*/
            this.isLoading = false;

            if (data.note.length > 0 ){
              this.noDataSwitch = true
            } else if (data.note.length == 0){
              this.noDataSwitch = false
            }  else {
              this.noDataSwitch =true}        
              
             console.log(data.note.length) 
          })
        }       
    })




    //podatki za tablo
    this.maintableService.getTableData().subscribe( res => console.log (res)
    )
    this.getCustomViewDetails();
    this.getNamesSideNav();
    this.maintableService.getTableData2()
    .subscribe((res) => {
      this.dataCompanyTable = new MatTableDataSource<MockIn>(res);
    })


    this.getDynamicIndex2()
  }
 //dinamični stolpci
  getDynamicIndex2() {
    this.maintableService.getTableData2()
    .subscribe((res) =>{
      this.dataCompanyTable.filteredData = res;
      this.dataCompanyColums = Object.getOwnPropertyNames(this.dataCompanyTable.filteredData[0]);
      //this.setupTable()
     })
  }

}


//data table






/*   this.inputForm.valueChanges
    .pipe(
      tap(() => this.isLoading$.next(true) ),
      startWith(''),
      debounceTime(100),
     ) .subscribe((res: string) => { 
      console.log(res)
      this.inputS.getCountry(res.toString().toLowerCase())
            .subscribe(data => {
              this.filterObserver = data; 
              //console.log(this.filterObserver)
              this.isLoading$.next(false)
              catchError( error => this.isLoading$)    
              //(handleError()this.isLoading$.next(false)
          })
    }
  )*/