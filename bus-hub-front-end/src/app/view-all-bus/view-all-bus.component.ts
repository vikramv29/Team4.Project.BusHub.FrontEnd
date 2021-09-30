import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService} from '../bus.service';

@Component({
  selector: 'app-view-buses',
  templateUrl: './view-all-bus.component.html',
  styleUrls: ['./view-all-bus.component.css']
})
export class ViewAllBusComponent  implements OnInit {

  private buses: Bus[];
  flag :boolean;
  constructor(private service: BusService) {
    this.flag=false;
   }

  ngOnInit() {
    this.service.getAllBuses().subscribe(res => {
      this.buses= res ;
      this.flag= true;
    })
  }
}
