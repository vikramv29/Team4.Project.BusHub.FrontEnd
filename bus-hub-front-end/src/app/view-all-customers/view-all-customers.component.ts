import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService} from '../customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  private customers: Customer[];
  constructor(private service: CustomerService) {

   }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(res => {
      this.customers= res ;
    })
  }
}
