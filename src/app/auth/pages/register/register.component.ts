import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  miFormulario:FormGroup= this.fb.group({
    name:['leonel',[Validators.required]],
    email:['prueba@gmail.com',[Validators.required,Validators.email]],
    password:['12345678',[Validators.required,Validators.minLength(6)]]
  });
  constructor(private fb:FormBuilder,
      private router:Router,
      private authService:AuthService){

  }

  register() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro( name, email, password )
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }


}
