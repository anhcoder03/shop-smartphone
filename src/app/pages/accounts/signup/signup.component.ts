import { ISignup } from './../../../interface/auth';
import { AuthService } from './../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService, private router: Router) {
  }
  userForm = this.FormBuilder.group({
    fullname: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  })


  ngOnInit() {
    console.log(this.userForm);

  }
  onHandleSignup() {
    if (this.userForm.invalid) return;
    const user: ISignup = {
      email: this.userForm.value.email || '',
      fullname: this.userForm.value.fullname || '',
      password: this.userForm.value.password || '',
      confirmPassword: this.userForm.value.confirmPassword || '',
    }
    console.log(user)
    this.AuthService.signup(user).subscribe((data) => {
      alert("Đăng ký thành công😊");
      console.log(data);
    })
  }
}
