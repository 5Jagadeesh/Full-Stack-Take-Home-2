import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort, MatPaginatorIntl, Sort } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  ServiceErrMsg: string;
  ServiceErr: boolean;
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

  constructor( public dialogRef: MatDialogRef<AddemployeeComponent>) {
    this.date.setDate(this.date.getDate() - 1);
  }


  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm){

  }
}
