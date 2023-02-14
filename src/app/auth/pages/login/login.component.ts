import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario:FormGroup= this.fb.group({
    email:['leonelchana@gmail.com',[Validators.required,Validators.email]],
    password:['12345678',[Validators.required,Validators.minLength(6)]]
  });
  constructor(private fb:FormBuilder){

  }

  login(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);

  }
}
