import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService} from '../ticket.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-alltickets.component.html',
  styleUrls: ['./view-alltickets.component.css']
})
export class ViewAllticketsComponent implements OnInit {

  private tickets: Ticket[];
  constructor(private service: TicketService) {

   }

  ngOnInit() {
    this.service.getAllTickets().subscribe(res => {
      this.tickets= res ;
    })
  }
}
