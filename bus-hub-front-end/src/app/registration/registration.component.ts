import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private customer: Customer ;
  constructor(private service: CustomerService, private router: Router) {
    this.customer= new Customer() ;
   }


   public addCustomer(){
     this.service.addCustomer(this.customer).subscribe(res =>{
       this.customer= new Customer();
       this.router.navigate(['/login']);
       console.log(this.customer.customerName);
     })
   }


}