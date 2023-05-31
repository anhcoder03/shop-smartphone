import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent {
  constructor(private router: Router, private FormBuilder: FormBuilder, private AuthService: AuthService, private ToastrModule: ToastrModule, private route: ActivatedRoute) { }
  userForm = this.FormBuilder.group({
    fullname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    email: ['', [Validators.required, Validators.email]],
    avata: [''],
    admin: [false],
    status: [''],
    _id: [''],
  })
  user: IUser = {
    _id: '',
    fullname: '',
    email: '',
    status: '',
    admin: false,
  }
  ngOnInit() {
    this.getOneAccount();
  }
  getOneAccount() {
    this.route.paramMap.subscribe((params: any) => {
      const _id = String(params.get('id'));
      if (_id) {
        this.AuthService.getOneAccount(_id).subscribe((data) => {
          this.user = data.data;
          console.log(data.data);

          this.userForm.patchValue({
            _id: this.user._id,
            fullname: this.user.fullname,
            email: this.user.email,
            avata: this.user.avata,
            admin: !!this.user.admin,
            status: this.user.status,
          })
        })
      }
    })
  }
  onHandleSubmit() {
    if (this.userForm.invalid) return;
    const user: IUser = {
      _id: this.user._id,
      fullname: this.userForm.value.fullname || '',
      email: this.userForm.value.email || '',
      avata: this.userForm.value.avata || '',
      admin: !!this.userForm.value.admin,
      status: this.userForm.value.status || '',
    }
    this.AuthService.UpdateAccount(user).subscribe((data) => {
      console.log(data);
      if (data.success) {
        alert("Sửa thành công");
        this.router.navigateByUrl("/admin/account")
      }
    })
  }
}
