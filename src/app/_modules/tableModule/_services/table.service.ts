import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockData } from '../_interfaces/mock-data';


@Injectable({
  providedIn: 'root'
})
export class TableService  {

  constructor(private http: HttpClient) { }



  //MOCK TEST
  tableInfoUrlSpecific = "https://jsonplaceholder.typicode.com/todos"
  //tableInfoUrlSpecific = "http://10.2.2.20:8765/customers/1"
 
  tableInfoUrlSpecific2 = "https://jsonplaceholder.typicode.com/albums"

  //Event Data za glavno tabelo na home-pagu
  getEventData(): Observable<MockData[]>{
    return this.http.get<MockData[]>(this.tableInfoUrlSpecific) 
  }
  //Event Data za specifično podjetje
  getCompanyEventData(): Observable<MockData[]>{
    return this.http.get<MockData[]>(this.tableInfoUrlSpecific2) 
  }


  


}


