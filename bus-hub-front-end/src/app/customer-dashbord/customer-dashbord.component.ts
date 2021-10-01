import { Component, OnInit } from '@angular/core';

import { Bus } from '../bus';
import { BusService } from './../bus.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs'


@Component({
  selector: 'app-customer-dashbord',
  templateUrl: './customer-dashbord.component.html',
  styleUrls: ['./customer-dashbord.component.css']
})


export class CustomerDashbordComponent{
  buses: Bus[];
  bus1: Bus[];
  bus = new Bus();
  msg = "";
  flag: boolean=false;


  constructor(private service: BusService, private route: Router) { }

  public checkBus() {
    this.service.getAllBuses().subscribe(res => {
      this.buses= res ;
    })
    for(let i=0; i<this.buses.length;i++){
      if(this.buses[i].busSource==this.bus.busSource && this.buses[i].busDestination==this.bus.busDestination && this.buses[i].busOnBoardDate==this.bus.busOnBoardDate){
        this.bus1.push(this.buses[i]);
      }
    }
      }
    }
    