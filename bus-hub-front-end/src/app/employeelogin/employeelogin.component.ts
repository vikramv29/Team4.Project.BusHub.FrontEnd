import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-customer',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
  private employee: Employee ;
  constructor( private router: Router) {
    this.employee= new Employee() ;
    flag:Boolean;
   }


   public loginEmployee(){
     let email = "vikram@gmail.com";
     let password = "vikram";

    if(email == this.employee.employeeEmailId && password == this.employee.employeePassword){
      
      this.router.navigate(['employeeLogin/employeedashbord']);
    }
    else{
      let message:"Invalid Credentials";
    }
   }


}