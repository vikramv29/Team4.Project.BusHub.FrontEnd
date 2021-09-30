import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-get-bus-bytype',
  templateUrl: './get-bus-bytype.component.html',
  styleUrls: ['./get-bus-bytype.component.css']
})
export class GetBusBytypeComponent {

  private buses: Bus[];
  private bus:Bus;
  flag:boolean;

  constructor(private service: BusService, private router: Router) { 
    
    this.bus = new Bus();
    this.flag = true;
  }

  getBusByType(){
    this.service.getBusesBybusType(this.bus.busType).subscribe(res => {
    console.log(this.bus.busType);
    this.buses= res;

    if(this.buses.length == 0){
      this.flag = false;
    }

    })
  }
}
