import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent  {
  private ticket: Ticket ;
  constructor(private service: TicketService, private router: Router) {
    this.ticket= new Ticket() ;
   }


   public addTicket(){
     this.service.addTicket(this.ticket).subscribe(res =>{
       this.ticket= new Ticket() ;
       this.router.navigate(['/login/customerdashbord/addticket']);
     })
   }


}