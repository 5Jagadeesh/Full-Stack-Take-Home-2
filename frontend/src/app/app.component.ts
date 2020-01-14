import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { AddemployeeComponent } from "./components/addemployee/addemployee.component";
import {EmployeesService} from "./services/employees.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Employees';
  constructor(private dialog: MatDialog) { }
  addEmployee(){
    this.dialog.open(AddemployeeComponent,  {
      panelClass: 'custom-dialog-container',
      width: '40%',
      height: '50%',
      data: {name: 'Jagan', animal: 'tiger'}

    });
  }
}
