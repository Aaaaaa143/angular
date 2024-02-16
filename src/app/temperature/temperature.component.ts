import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  degree:number=0
  fahrenheit:number=32

  degreeToFahrenheit(){
    this.fahrenheit=((this.degree)*9/5)+32
  }
  fahrenheitToDegree(){
    this.degree=((this.fahrenheit)-32)*5/9
  }

}
