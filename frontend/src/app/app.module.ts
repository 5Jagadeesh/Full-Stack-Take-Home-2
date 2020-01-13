import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule }    from '@angular/common/http';
import { EmployeesService } from './services/employees.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
