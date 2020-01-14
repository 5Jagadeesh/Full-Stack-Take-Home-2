import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort, MatPaginatorIntl, Sort } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { EmployeesService } from "../../services/employees.service";

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  ServiceErrMsg: string;
  ServiceErr: boolean;
  ServiceSuccess: boolean;
  ServiceSuccessMsg: string;
  data = {
    firstName: '',
    lastName: '',
    role: '',
    hireDate: ''
  };
  roles:any[]=[
    'CEO',
    'VP',
    'MANAGER',
    'LACKEY'
  ];
  date = new Date();
  role:string = '';

  constructor( public dialogRef: MatDialogRef<AddemployeeComponent>,
               private employeesService: EmployeesService) {
    this.date.setDate(this.date.getDate() - 1);
  }


  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
    this.employeesService.filter('refresh list');
  }

  onFormSubmit(form: NgForm){
    const userData = form.value;
    this.addEmployeeService(userData);
  }

  addEmployeeService(userdata){
    const momentDate = new Date(userdata.hireDate); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYY-MM-DD");
    this.data = {
      firstName: userdata.firstName,
      lastName: userdata.lastName,
      role: this.role,
      hireDate: formattedDate
    };
    /*Service call*/
    this.employeesService.addEmployee(this.data).subscribe(resp=>{
      this.ServiceSuccessMsg = "Employee Added Successfully";
      //this.onNoClick();
      alert(this.ServiceSuccessMsg);
    },error=> {
        this.ServiceErrMsg = `Failed to create an employee`;
      alert(this.ServiceErrMsg);
      })
  }
}
