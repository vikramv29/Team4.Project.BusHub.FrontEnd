import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { Customer } from '../customer';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-viewticket-by-id',
  templateUrl: './viewticket-by-id.component.html',
  styleUrls: ['./viewticket-by-id.component.css']
})
export class ViewticketByIdComponent {

  customerId: number;
  customer: Customer;
  busId: number;
  bus: Bus;
  ticketId: number;
  ticket: Ticket;
  flag: boolean;
  viewflag:boolean;

  constructor(private service: TicketService, private router: Router ) { 
    this.ticket = new Ticket();
    this.flag = true;
    this.viewflag = false;
  }

  getTicketById() {
    this.service.getTicketByticketId(this.ticketId).subscribe(res => {
      // console.log(this.customer);
      this.ticket = res;
      // console.log(this.customer);
      if(this.ticket == new Ticket()){
        this.flag = false;
    }
      else{
        this.viewflag = true;
      }
      
    })
  }
}
