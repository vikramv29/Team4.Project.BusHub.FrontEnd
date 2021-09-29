import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from './../customer.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  customer = new Customer();
  msg = "";
  flag: boolean=false;


  constructor(private _service: CustomerService, private route: Router) { }

  public loginCustomer() {
    this._service.loginCustomer(this.customer).subscribe(
      data => {
        console.log("response received");
        localStorage.setItem('token',JSON.stringify(data));
        this.route.navigate(['/home']);
         alertify.success("Successfully Loged In");
        // alertyfy
        // .alert("This is an alert dialog.", function(){
        //   alertyfy.message('OK');
        // });
      },
      
      error => {
        console.log("exception occured");
        
        this.flag = true;
        this.msg = "Bad Credentials, Please enter valid email & password";
        alertify.error("Enter Valid Credentials");

        
        
      }
    )
  }
}