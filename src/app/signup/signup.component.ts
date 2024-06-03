import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import e from 'express';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})
export class SignupComponent{
  public loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  public isLoggedIn: boolean = true;


  constructor(private loginService: SignupService, private formBuilder: FormBuilder, private router: Router){}

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
