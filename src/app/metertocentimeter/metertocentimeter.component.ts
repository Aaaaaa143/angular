import { Component } from '@angular/core';

@Component({
  selector: 'app-metertocentimeter',
  templateUrl: './metertocentimeter.component.html',
  styleUrls: ['./metertocentimeter.component.css']
})
export class MetertocentimeterComponent {

  meter:number=0
  centimeter:number=0

  meterToCenti(){
    this.centimeter=this.meter*100
  }
  centiToMeter(){
    this.meter=this.centimeter/100
  }
}
