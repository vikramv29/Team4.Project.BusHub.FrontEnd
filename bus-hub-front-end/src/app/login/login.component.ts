import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private customer:Customer;
  constructor( private router: Router) { 
    this.customer = new Customer();
  }

  public login(){
    
    // let email = "Vikram";
    // let password = "nikhil";

    // if(this.customer.customerEmailId == email && this.customer.customerPassword == password){
      this.router.navigate(['/login/customerdashbord']);
    

  }

}
