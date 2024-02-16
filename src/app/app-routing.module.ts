import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { CubeComponent } from './cube/cube.component';
import { DivisionComponent } from './division/division.component';
import { MetertocentimeterComponent } from './metertocentimeter/metertocentimeter.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"bmi",component:BmiComponent},
  {path:"emi",component:EmiComponent},
  {path:"cube",component:CubeComponent},
  {path:"division",component:DivisionComponent},
  {path:"lengthconversion",component:MetertocentimeterComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"temperatureconversion",component:TemperatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
