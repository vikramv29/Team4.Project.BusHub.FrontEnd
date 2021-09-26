import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer;
  flag: boolean;
  viewFlag: boolean;
  constructor(private service: CustomerService, private router: Router) {
    this.customer = new Customer();
    this.flag = true;
    this.viewFlag = true;
  }
  ngOnInit() {
  }
  getCustomerById() {
    this.service.getCustomerBycustomerId(this.id).subscribe(res => {

      this.customer = res;
      this.flag = false;
      this.viewFlag = false;
    })
  }

  updateCustomer() {
    this.service.updateCustomer(this.customer).subscribe(res => {
      //this.student = new Student();
      this.router.navigate(["/updatecustomer"])
    })
  }

}