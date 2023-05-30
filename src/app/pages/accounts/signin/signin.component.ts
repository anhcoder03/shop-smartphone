import { AuthService } from './../../../services/auth/auth.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISignin } from 'src/app/interface/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  userForm = this.FormBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {}

  onHandleSignin() {
    if (this.userForm.invalid) {
      return;
    }
    const user: ISignin = {
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
    };
    this.AuthService.signin(user).subscribe((data) => {
      if (data.success) {
        this.toastr.success(data.message);
        this.AuthService.saveUserToSessionStorage(data.user);
        this.AuthService.saveAccessToken(data.accessToken);
        this.cdr.detectChanges();
        this.router.navigateByUrl('');
      }
    });
  }
}
