import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {
  id: number;
  busList: Bus[];
  flag: boolean;
  constructor(private service: BusService, private router: Router) {
    this.flag = false;
  }

  ngOnInit() {
    this.service.getAllBuses().subscribe(res => {
      this.busList = res;
      if (this.busList.length > 0) {
        this.flag = true;
      }
    });

  }

  public deleteBusById() {
    this.service.deleteBus(this.id).subscribe(res => {
      this.router.navigate(["/viewallbuses"]);
    });

  }
}