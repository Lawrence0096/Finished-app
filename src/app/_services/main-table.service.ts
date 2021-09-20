import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Company } from '../_interfaces/Company';
import  {CompanyDetails} from '../_interfaces/Company-details'
import { MockIn } from '../_interfaces/Mock-in';


@Injectable({
  providedIn: 'root'
})
export class MainTableService {

  constructor(private http: HttpClient) { }

  tableInfoUrlSpecific = "https://jsonplaceholder.typicode.com/todos"
  //tableInfoUrlSpecific = "http://10.2.2.20:8765/customers/1"
 
  tableInfoUrlSpecific2 = "https://jsonplaceholder.typicode.com/albums"

  getTableData(): Observable<MockIn[]>{
    return this.http.get<MockIn[]>(this.tableInfoUrlSpecific) 
  }
  getTableData2(): Observable<MockIn[]>{
    return this.http.get<MockIn[]>(this.tableInfoUrlSpecific2) 
  }


  


}





/* constructor(private httpClient : HttpClient) { }
  private url : string = 'https://restcountries.eu/rest/v2/name';

  getCountry(name :string): Observable<Country[]>{
      return this.httpClient.get<Country[]>(this.url + `/${name}`).pipe(delay(2000))
  }
}*/