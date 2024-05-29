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


  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password);
      if (this.loginService.token() !== null) {
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      }
      else {
        this.isLoggedIn = false;
      }
    }
  }
}
