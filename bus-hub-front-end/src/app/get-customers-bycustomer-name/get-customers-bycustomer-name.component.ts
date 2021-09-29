import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-customers-bycustomer-name',
  templateUrl: './get-customers-bycustomer-name.component.html',
  styleUrls: ['./get-customers-bycustomer-name.component.css']
})
export class GetCustomersBycustomerNameComponent {

  private customers: Customer[];
  private customer:Customer;
  flag:boolean;

  constructor(private service: CustomerService, private router: Router) { 
    
    this.customer = new Customer();
    this.flag = true;
  }

  getCustomerByName(){
    this.service.getCustomersBycustomerName(this.customer.customerName).subscribe(res => {
    console.log(this.customer.customerName);
    this.customers= res;

    if(this.customers.length == 0){
      this.flag = false;
    }

    })
  }
}
