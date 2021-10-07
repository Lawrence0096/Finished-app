import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Customer } from '../_interfaces/customer';


@Injectable({
  providedIn: 'root'
})
export class SelectedCompanyDataService {


//SERVICE OMOGOČA, POSREDOVANJE PARAMETROV PRIDOBLJENIH OD UPORABNIKA, KO KLIKNE NA POSAMEZNO STRANKO
  // @ts-ignore
  public selectedCompany$ = new BehaviorSubject<Customer?>(null)
  constructor() {}
  //iz app.component.ts pridobi podatkovne parametre (ID,NAME), katere stranimo v Behavior subject
  setSelectedCompany(company :any) : void {
      this.selectedCompany$.next(company)
  }
}
