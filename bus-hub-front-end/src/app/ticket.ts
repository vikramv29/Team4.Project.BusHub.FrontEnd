import { Bus } from "./bus";
import { Customer } from "./customer";

export class Ticket {
    ticketId: number;
    customer: Customer ;
    bus: Bus;
    noOfPassengers: number;
    totalPrice: number;
}
