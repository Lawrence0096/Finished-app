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


  //color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value: any
  bufferValue = 75;




  public _selectedCompany$ = this.namefetchService.selectedCompany$.asObservable();
  
  public selectedCompany?: any = this._selectedCompany$;

  public selectedCompanyArray: any

  constructor(
    private  maintableService : MainTableService, 
    private customViewService : CustomViewService, 
    private namefetchService : NamefetchService) {  }
 

  mainTableInfo: any [] =[];

  @Input() item = '';

  switchTrue = true;
  switchFalse = false;


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
    .subscribe((company: Company | null) => {
        if(company !== null) {
          console.log(company)
          this.customViewService.getCustomers(company.id)
          .subscribe(data => {
            company.companyDetails = data; 
            company.companyDetails.system.drives.forEach(drive => {
              // @ts-ignore
              console.log(drive)
              
            })
            console.log()
            this.isLoading = false;



          })
        }       
    })

    console.log(this._selectedCompany$)



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