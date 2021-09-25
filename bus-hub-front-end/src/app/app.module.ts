import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import {MatNativeDateModule,MatIconModule,MatButtonModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { CustomerDashbordComponent } from './customer-dashbord/customer-dashbord.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchBySourceComponent } from './search-by-source/search-by-source.component';
import { SearchByBusTypeComponent } from './search-by-bus-type/search-by-bus-type.component';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EmployeeloginComponent,
    CustomerDashbordComponent,
    EmployeeDashbordComponent,
    SearchByNameComponent,
    SearchByIdComponent,
    SearchBySourceComponent,
    SearchByBusTypeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
