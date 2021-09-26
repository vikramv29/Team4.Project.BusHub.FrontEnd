import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent implements OnInit {

  id: number;
  bus: Bus;
  flag: boolean;
  viewFlag: boolean;
  constructor(private service: BusService, private router: Router) {
    this.bus = new Bus();
    this.flag = true;
    this.viewFlag = true;
  }
  ngOnInit() {
  }
  getBusById() {
    this.service.getBusBybusId(this.id).subscribe(res => {

      this.bus = res;
      this.flag = false;
      this.viewFlag = false;
    })
  }

  updateBus() {
    this.service.updateBus(this.bus).subscribe(res => {
      //this.student = new Student();
      this.router.navigate(["/updatebus"])
    })
  }

}