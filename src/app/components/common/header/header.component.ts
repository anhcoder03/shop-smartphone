import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    // const currentUser = sessionStorage.getItem('currentUser');
    // if (currentUser) {
    //   this.user = JSON.parse(currentUser);
    // }
    // this.dataUser();
  }
  logOut() {
    this.authService.logOut();
    this.toastr.success('Đăng xuất thành công');
  }
  get dataUser() {
    const getUser: any = this.authService.getUserLogin();
    const currentUser: any = JSON.parse(getUser);
    return currentUser;
  }
}
