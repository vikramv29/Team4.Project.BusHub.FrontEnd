import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerId: number;
  customerList: Customer[];
  flag: boolean;
  constructor(private service: CustomerService, private router: Router) {
    this.flag = false;
  }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(res => {
      this.customerList = res;
      if (this.customerList.length > 0) {
        this.flag = true;
      }
    });

  }

  public deleteCustomerById() {
    this.service.deleteCustomer(this.customerId).subscribe(res => {
      this.router.navigate(["/employeeLogin/employeedashbord/viewallcustomers"]);
    });

  }
}