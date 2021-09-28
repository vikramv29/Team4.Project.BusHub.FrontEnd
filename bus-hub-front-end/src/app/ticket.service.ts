import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:9090/ticket" ;
   }
   public addTicket(ticket: Ticket): Observable<Ticket>{
     return this.http.post<Ticket>(this.url, ticket) ;
   }
  public getAllTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url+ "s") ;
  }
  public getTicketByticketId(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + "/ticketId/" + ticketId);
  }
}