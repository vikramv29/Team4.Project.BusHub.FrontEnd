import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import {MatNativeDateModule,MatIconModule,MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule} from '@angular/material';
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
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { GetBusByIdComponent } from './get-bus-by-id/get-bus-by-id.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { ViewAllBusComponent } from './view-all-bus/view-all-bus.component';
import { GetBusByNameComponent } from './get-bus-by-name/get-bus-by-name.component';
import { GetBusBySourceComponent } from './get-bus-by-source/get-bus-by-source.component';
import { GetBusBytypeComponent } from './get-bus-bytype/get-bus-bytype.component';
// import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
// import { GetCustomerbynameComponent } from './get-customerbyname/get-customerbyname.component';
// import { GetCustomeridComponent } from './get-customerid/get-customerid.component';
import { ViewAllticketsComponent } from './view-alltickets/view-alltickets.component';
import { ViewticketByIdComponent } from './viewticket-by-id/viewticket-by-id.component';
// import { NewComponentComponent } from './new-component/new-component.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
// import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetCustomerBycustomerIdComponent } from './get-customer-bycustomer-id/get-customer-bycustomer-id.component';
import { GetCustomersBycustomerNameComponent } from './get-customers-bycustomer-name/get-customers-bycustomer-name.component';
import { GetCustomersBycustomerEmailIdComponent } from './get-customers-bycustomer-email-id/get-customers-bycustomer-email-id.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { HomeComponent } from './home/home.component';






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
    SearchByBusTypeComponent,
    AddbusComponent,
    UpdatebusComponent,
    GetBusByIdComponent,
    DeleteBusComponent,
    ViewAllBusComponent,
    GetBusByNameComponent,
    GetBusBySourceComponent,
    GetBusBytypeComponent,
    // GetAllCustomerComponent,
    // GetCustomerbynameComponent,
    // GetCustomeridComponent,
    ViewAllticketsComponent,
    ViewticketByIdComponent,
    // NewComponentComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    // GetAllCustomersComponent,
    GetCustomerBycustomerIdComponent,
    GetCustomersBycustomerNameComponent,
    GetCustomersBycustomerEmailIdComponent,
    ViewAllCustomersComponent,
    AddTicketComponent,
    HomeComponent
    
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
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
