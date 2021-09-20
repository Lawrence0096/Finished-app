import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Company } from '../_interfaces/Company';


@Injectable({
  providedIn: 'root'
})
export class CompanyDisplayService {



    constructor(private httpClient: HttpClient) { }
  
    private customerUrl = "http://10.2.2.20:8765/customers"
    
    //možno da je kaj z backendom narobe
    getCompanies(): Observable<Company[]>{
      return this.httpClient.get<Company[]>(this.customerUrl).pipe(
        //@ts-ignore
        map(value => [...value.customers])
        );
      }
  
}
