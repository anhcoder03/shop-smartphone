import { AuthService } from './../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ISignin } from 'src/app/interface/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService) { }

  userForm = this.FormBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  ngOnInit() {
  }

  onHandleSignin() {
    if (this.userForm.invalid) { return; }
    const user: ISignin = {
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
    }
    console.log(2);


    console.log(user);


    this.AuthService.signin(user).subscribe((data) => {
      alert("Đăng nhập thành công");
      console.log(data);

    })
  }
}
