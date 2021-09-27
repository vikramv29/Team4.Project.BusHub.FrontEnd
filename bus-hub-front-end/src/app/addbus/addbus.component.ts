import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent  {
  private bus: Bus ;
  constructor(private service: BusService, private router: Router) {
    this.bus= new Bus() ;
   }


   public addBus(){
     this.service.addBus(this.bus).subscribe(res =>{
       this.bus= new Bus() ;
       this.router.navigate(['employeeLogin/employeedashbord/viewallbuses']);
     })
   }

  

}
