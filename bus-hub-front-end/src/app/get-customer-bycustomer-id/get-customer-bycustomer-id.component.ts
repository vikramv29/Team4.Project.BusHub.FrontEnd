import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-customer-bycustomer-id',
  templateUrl: './get-customer-bycustomer-id.component.html',
  styleUrls: ['./get-customer-bycustomer-id.component.css']
})
export class GetCustomerBycustomerIdComponent {

  customerId: number;
  customer: Customer;
  flag: boolean;
  viewflag:boolean;

  constructor(private service: CustomerService, private router: Router ) { 
    this.customer = new Customer();
    this.flag = true;
    this.viewflag = false;
  }

  getCustomerById() {
    this.service.getCustomerBycustomerId(this.customerId).subscribe(res => {
      console.log(this.customer);
      this.customer = res;
      console.log(this.customer);
      if(this.customer == new Customer()){
        this.flag = false;
    }
      else{
        this.viewflag = true;
      }
      
    })
  }
}
