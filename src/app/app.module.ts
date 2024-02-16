import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { DivisionComponent } from './division/division.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { MetertocentimeterComponent } from './metertocentimeter/metertocentimeter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmiComponent } from './emi/emi.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    SubtractionComponent,
    DivisionComponent,
    BmiComponent,
    TemperatureComponent,
    MetertocentimeterComponent,
    RegisterComponent,
    LoginComponent,
    EmiComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
