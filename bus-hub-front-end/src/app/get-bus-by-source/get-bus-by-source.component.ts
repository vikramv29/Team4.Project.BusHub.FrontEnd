import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-get-bus-by-source',
  templateUrl: './get-bus-by-source.component.html',
  styleUrls: ['./get-bus-by-source.component.css']
})
export class GetBusBySourceComponent {

  private buses: Bus[];
  private bus:Bus;
  flag:boolean;

  constructor(private service: BusService, private router: Router) { 
    
    this.bus = new Bus();
    this.flag = true;
  }
  
  getBusBySource(){
    this.service.getBusesBybusSource(this.bus.busSource).subscribe(res => {
    console.log(this.bus.busSource);
    this.buses = res;

    if(this.buses.length == 0){
      this.flag = false;
    }

    })
  }
}
