import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Company } from '../_interfaces/Company';


@Injectable({
  providedIn: 'root'
})
export class NamefetchService {

  // preimenuj v selectedCompanySubj
  // @ts-ignore
  public selectedCompany$ = new BehaviorSubject<Company?>(null)
  

  constructor() {}

  //pridobi podateke ko uporabnik klikne na userja v Navbaru, 
  setSelectedCompany(company :any) : void {
     //console.log(data)
     //console.log('setting selectedcompany in service', company)
  
      this.selectedCompany$.next(company)
    
  }
}
