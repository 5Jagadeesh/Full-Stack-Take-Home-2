import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  rows = [
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

  constructor() { }

  ngOnInit() {
  }

}
