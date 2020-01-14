import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule }    from '@angular/common/http';
import { EmployeesService } from './services/employees.service';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule
  ],
  exports:[
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddemployeeComponent]
})
export class AppModule { }
