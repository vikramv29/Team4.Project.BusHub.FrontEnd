import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-get-bus-by-id',
  templateUrl: './get-bus-by-id.component.html',
  styleUrls: ['./get-bus-by-id.component.css']
})
export class GetBusByIdComponent {

  busId: number;
  bus: Bus;
  flag: boolean;
  viewflag:boolean;

  constructor(private service: BusService, private router: Router ) { 
    this.bus = new Bus();
    this.flag = true;
    this.viewflag = false;
  }

  getBusById() {
    this.service.getBusBybusId(this.busId).subscribe(res => {
      console.log(this.bus);
      this.bus = res;
      console.log(this.bus);
      if(this.bus == new Bus()){
        this.flag = false;
    }
      else{
        this.viewflag = true;
      }
      
    })
  }
  

}
