import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginComponent{
  public loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private loginService: LoginService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password);
    }
  }
}
