import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {

  emi:number=0
  totalPayableAmount:number=0
  TotalInterestAmount:number=0

  emiForm= new FormGroup({
    amount: new FormControl("",Validators.required),
    interest: new FormControl("",Validators.required),
    tenure: new FormControl("",Validators.required)
  })

  get amount(){
    return this.emiForm.get("amount")
  }

  get interest(){
    return this.emiForm.get("interest")
  }

  get tenure(){
    return this.emiForm.get("tenure")
  }

  emiCalc(){

    // console.log(this.amount?.value)
    // console.log(this.interest?.value)
    // console.log(this.tenure?.value)

    let p=Number(this.amount?.value)
    let n=Number(this.tenure?.value)*12
    let r=Number(this.interest?.value)/12
    let i=r/100
    let onePlusR=(1+i)**n

    this.emi=Math.round((p*i*onePlusR)/(onePlusR-1))
    // console.log(this.emi)
    this.totalPayableAmount=this.emi*n
    this.TotalInterestAmount=this.totalPayableAmount-p
    
  }

}
