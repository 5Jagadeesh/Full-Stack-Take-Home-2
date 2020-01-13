import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  /*rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];*/
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
