import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

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
}
