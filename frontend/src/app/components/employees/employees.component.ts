import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  rows: any[] = [
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"abc","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
    {"_id":"03ed4a97-7dbd-4078-9dc7-3f5de49b5837","firstName":"Jagadeesh","lastName":"T E","hireDate":"2019-01-01","role":"VP","favoriteJoke":"","favoriteQuote":"You had me at meat tornado."},
  ];
  columns = [
    { prop: 'Id' },
    { name: 'First Name' },
    { name: 'Last Name' },
    { name: 'Hire Date'  },
    { name: 'Role' },
    { name: 'Favorite Joke' },
    { name: 'Favorite Quote' }
  ];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getAllEmployees().subscribe(employees =>{
      if(employees.Employees.length >0) {
        //this.rows = employees.Employees;
      }
    })
  }

}
