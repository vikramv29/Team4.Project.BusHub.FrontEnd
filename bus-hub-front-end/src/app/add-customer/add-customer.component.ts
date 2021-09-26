import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {
  private customer: Customer ;
  constructor(private service: CustomerService, private router: Router) {
    this.customer= new Customer() ;
   }


   public addCustomer(){
     this.service.addCustomer(this.customer).subscribe(res =>{
       this.customer= new Customer() ;
       this.router.navigate(['/viewallcustomers']);
     })
   }


}