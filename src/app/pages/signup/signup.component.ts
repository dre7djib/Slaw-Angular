import { NgModule, Component } from '@angular/core';
import { SignupService } from './signup.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class SignupComponent {
  public signupForm: FormGroup;
  public isLoggedIn: boolean = false;

  constructor(private signupService: SignupService, private formBuilder: FormBuilder, private router: Router,  private loginService: LoginService) { 
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
  
    return pass === confirmPass ? null : { notSame: true }     
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupService.signup(this.signupForm.value.name, this.signupForm.value.age, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.confirmPassword)
        .subscribe((res: any) => {
            this.loginService.login(this.signupForm.value.email, this.signupForm.value.password);
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 2000);
        });
    }
  }
}