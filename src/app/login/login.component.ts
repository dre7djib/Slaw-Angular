import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import e from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent{
  public loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  public isLoggedIn: boolean = true;
  public errorMessage: string = '';
  public successMessage: string = '';

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      try {
        await this.loginService.login(this.loginForm.value.email, this.loginForm.value.password);
        const token = await this.loginService.token();
        if ( token == null) {
          this.isLoggedIn = false;
          this.errorMessage = 'Authentication failed. Please check your credentials.';
        } else {
          this.successMessage = 'Authentication successful. Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        }
      } catch (error) {
        this.isLoggedIn = false;
        this.errorMessage = 'An error occurred during authentication. Please try again later.';
      }
    }
  }
}
