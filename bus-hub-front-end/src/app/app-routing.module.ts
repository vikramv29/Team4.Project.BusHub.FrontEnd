import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashbordComponent } from './customer-dashbord/customer-dashbord.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchByBusTypeComponent } from './search-by-bus-type/search-by-bus-type.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchBySourceComponent } from './search-by-source/search-by-source.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
