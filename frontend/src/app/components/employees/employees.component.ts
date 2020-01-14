import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  rows: any[] = [];
  columns = [
    { prop: 'Id' },
    { name: 'First Name' },
    { name: 'Last Name' },
    { name: 'Hire Date'  },
    { name: 'Role' },
    { name: 'Favorite Joke' },
    { name: 'Favorite Quote' }
  ];

  constructor(private employeesService: EmployeesService) {
    this.employeesService.listen().subscribe((m:any)=>{
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.refreshTable();
  }
  refreshTable(){
    console.log("Refresh");
    this.employeesService.getAllEmployees().subscribe(employees =>{
      if(employees.Employees.length >0) {
        this.rows = employees.Employees;
      }else{
        this.rows =[];
      }
    },error=>{
      alert('Failed to list the employees')
    })
  }
}
