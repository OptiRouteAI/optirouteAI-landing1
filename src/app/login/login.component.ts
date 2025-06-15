import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });

}

 get f() {
    return this.loginForm.controls;
  }

    onSubmit(): void {
    this.errorMessage = null; 

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

   
    const { email, password } = this.loginForm.value;

    console.log('Intentando iniciar sesión con:', email, password);

    if (email === 'usuario@example.com' && password === 'password123') {
      console.log('Inicio de sesión exitoso!');
     
      alert('¡Inicio de sesión exitoso!');

    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
      console.error('Error al inicio de sesión');
    }
  }
}