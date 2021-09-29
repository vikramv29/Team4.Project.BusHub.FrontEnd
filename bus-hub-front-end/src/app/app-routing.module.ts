import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AddbusComponent } from './addbus/addbus.component';
import { CustomerDashbordComponent } from './customer-dashbord/customer-dashbord.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
// import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { GetBusByIdComponent } from './get-bus-by-id/get-bus-by-id.component';
import { GetBusByNameComponent } from './get-bus-by-name/get-bus-by-name.component';
import { GetBusBySourceComponent } from './get-bus-by-source/get-bus-by-source.component';
import { GetBusBytypeComponent } from './get-bus-bytype/get-bus-bytype.component';
import { GetCustomerBycustomerIdComponent } from './get-customer-bycustomer-id/get-customer-bycustomer-id.component';
import { GetCustomersBycustomerEmailIdComponent } from './get-customers-bycustomer-email-id/get-customers-bycustomer-email-id.component';
import { GetCustomersBycustomerNameComponent } from './get-customers-bycustomer-name/get-customers-bycustomer-name.component';
// import { GetCustomerbynameComponent } from './get-customerbyname/get-customerbyname.component';
// import { GetCustomeridComponent } from './get-customerid/get-customerid.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchByBusTypeComponent } from './search-by-bus-type/search-by-bus-type.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchBySourceComponent } from './search-by-source/search-by-source.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { ViewAllBusComponent } from './view-all-bus/view-all-bus.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { ViewAllticketsComponent } from './view-alltickets/view-alltickets.component';
import { ViewticketByIdComponent } from './viewticket-by-id/viewticket-by-id.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'employeeLogin', component: EmployeeloginComponent},
  {path: 'login/customerdashbord', component: CustomerDashbordComponent},
  {path: 'employeeLogin/employeedashbord', component: EmployeeDashbordComponent},
  {path: 'login/customerdashbord/searchbyid', component: SearchByIdComponent},
  {path: 'login/customerdashbord/searchbyname', component: SearchByNameComponent},
  {path: 'login/customerdashbord/searchbytype', component: SearchByBusTypeComponent},
  {path: 'login/customerdashbord/searchbysource', component: SearchBySourceComponent},
  {path: 'employeeLogin/employeedashbord/addbus', component: AddbusComponent},
  {path: 'employeeLogin/employeedashbord/deletebus', component:DeleteBusComponent },
  // {path: 'employeeLogin/employeedashbord/allcustomers', component: GetAllCustomerComponent},
  {path: 'employeeLogin/employeedashbord/getbusbyid', component: GetBusByIdComponent},
  {path: 'employeeLogin/employeedashbord/getbusbyname', component: GetBusByNameComponent},
  {path: 'employeeLogin/employeedashbord/getbusbysource', component: GetBusBySourceComponent},
  {path: 'employeeLogin/employeedashbord/getbusbytype', component: GetBusBytypeComponent},
  // {path: 'employeeLogin/employeedashbord/getcustomerbyname', component: GetCustomerbynameComponent},
  // {path: 'employeeLogin/employeedashbord/getcustomerbyid', component: GetCustomeridComponent},
  {path: 'employeeLogin/employeedashbord/updatebus', component: UpdatebusComponent},
  {path: 'login/customerdahbord/updatecustomer', component: UpdateCustomerComponent},
  {path: 'employeeLogin/employeedashbord/viewallbuses', component: ViewAllBusComponent},
  {path: 'employeeLogin/employeedashbord/viewallcustomers', component: ViewAllCustomersComponent},
  {path: 'login/customerdashbord/addticket', component: AddTicketComponent},
  {path: 'employeeLogin/employeedashbord/viewalltickets', component: ViewAllticketsComponent},
  {path: 'employeeLogin/employeedashbord/viewticketbyid', component: ViewticketByIdComponent},
  {path: 'login/customerdashbord/getcustomerbyid', component: GetCustomerBycustomerIdComponent},
  {path: 'login/customerdashbord/getcustomerbyname', component: GetCustomersBycustomerNameComponent},
  {path: 'login/customerdashbord/getcustomerbyemailid', component: GetCustomersBycustomerEmailIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
