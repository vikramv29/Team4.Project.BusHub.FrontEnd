import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-get-customers-bycustomer-email-id',
  templateUrl: './get-customers-bycustomer-email-id.component.html',
  styleUrls: ['./get-customers-bycustomer-email-id.component.css']
})
export class GetCustomersBycustomerEmailIdComponent {

  customerEmailId: string;
  customer: Customer;
  flag: boolean;
  viewflag:boolean;

  constructor(private service: CustomerService, private router: Router ) { 
    this.customer = new Customer();
    this.flag = true;
    this.viewflag = false;
  }

  getCustomerByEmailId() {
    this.service.getCustomerBycustomerEmailId(this.customerEmailId).subscribe(res => {
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
