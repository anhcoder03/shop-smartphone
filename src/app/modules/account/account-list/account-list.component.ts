import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent {
  constructor(
    private AuthService: AuthService,
    private ToastrService: ToastrService
  ) {}

  users: IUser[] = [];
  data: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number | undefined = 0;
  ngOnInit() {
    this.getAllAccount();
  }
  getAllAccount() {
    this.AuthService.getAllAccount().subscribe((data) => {
      this.data = data;
      this.users = this.data.data;
      this.totalItems = this.data.totalUser;
    });
  }
  onPageChange(event: number): void {
    this.currentPage = event;
    this.getAllAccount();
  }
  onHandleRemove(_id: any) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa?');
    if (confirm) {
      this.AuthService.DeleteAccount(_id).subscribe((data) => {
        if (data.success) {
          this.ToastrService.success('Xóa tài khoản thành công😎🤪');
          this.users = this.users.filter((user) => user._id !== _id);
        } else {
          this.ToastrService.error('Xóa thất bại😜🙈');
        }
      });
    }
  }
}