import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Data } from '../data';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  data: Data[];

  constructor(public deviceService: DeviceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.deviceService.getHeroes().subscribe(data => this.data = data);
  }

}

