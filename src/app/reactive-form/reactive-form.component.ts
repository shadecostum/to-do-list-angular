import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  loginForm=new FormGroup({
    user:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  loginuser()
  {
    console.log(this.loginForm.value);
  }
    get userValidator()
  {
  return this.loginForm.get('user')
  }
  get emailValidator()
  {
  return this.loginForm.get('email')
  }
  get passwordValidator()
  {
  return this.loginForm.get('password')
  }

  

}
