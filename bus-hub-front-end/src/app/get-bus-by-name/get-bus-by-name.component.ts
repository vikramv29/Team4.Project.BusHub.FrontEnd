import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-get-bus-by-name',
  templateUrl: './get-bus-by-name.component.html',
  styleUrls: ['./get-bus-by-name.component.css']
})
export class GetBusByNameComponent {

  private buses: Bus[];
  private bus:Bus;
  flag:boolean;
  viewFlag: boolean;

  constructor(private service: BusService, private router: Router) { 
    
    this.bus = new Bus();
    this.flag = true;
    this.viewFlag= false;
  }

  getBusByName(){
    this.service.getBusesBybusName(this.bus.busName).subscribe(res => {
    console.log(this.bus.busName);
    this.buses= res;
    
    this.viewFlag= true;
    if(this.buses.length == 0){
      this.flag = false;
    }

    })
  }
}
