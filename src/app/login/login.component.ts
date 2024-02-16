import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logiForm= new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
    })

    get username(){
      return this.logiForm.get("username")
    }

    get password(){
      return this.logiForm.get("password")
    }

    signIn(){
      console.log(this.logiForm.value);
      
    }
  
}
