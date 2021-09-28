import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/_interfaces/Company';
import { CompanyDisplayService } from 'src/app/_services/company-display.service';
import { CompanyDetails } from 'src/app/_interfaces/Company-details';
import { CustomViewService } from 'src/app/_services/custom-view.service';
import { Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {

  username: string = "Hello";
  staticVar: boolean = false;
  paramsSubscription?: Subscription;
  @Input() companiesList: any[] = [];
  //customersObject?: Customer = undefined
  @Output() clickOnCompany : EventEmitter<any> = new EventEmitter();


  
  onSelect(company :Company) : void {
      this.clickOnCompany.emit(company)
  }



  constructor(private route: ActivatedRoute, private router: Router) { }

  onSelect2(companyID :any) {
    this.router.navigate(['/customer', companyID])
  }
  


  ngOnInit(): void {
    
   
  }

    
  
  
}


/* getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }*/



  