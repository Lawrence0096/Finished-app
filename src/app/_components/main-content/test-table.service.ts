import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MockData } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class TestTableService  {

  constructor(private http: HttpClient) { }

  tableInfoUrlSpecific = "https://jsonplaceholder.typicode.com/todos"
  //tableInfoUrlSpecific = "http://10.2.2.20:8765/customers/1"
 
  tableInfoUrlSpecific2 = "https://jsonplaceholder.typicode.com/albums"

  getTableData(): Observable<MockData[]>{
    return this.http.get<MockData[]>(this.tableInfoUrlSpecific) 
  }
  getTableData2(): Observable<MockData[]>{
    return this.http.get<MockData[]>(this.tableInfoUrlSpecific2) 
  }


  


}


