import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  result:number=0

  performsubtraction(b1:any,b2:any){
    let num1=+b1.value
    let num2=+b2.value
    this. result=num1-num2
    
  }

}
