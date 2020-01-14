import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesUrl : string = "http://localhost:3000/api/employees/";
  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<any>{
    return this.http.get(this.employeesUrl);
  }

  addEmployee(data): Observable<any>{
    return this.http.post(this.employeesUrl, data);
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
