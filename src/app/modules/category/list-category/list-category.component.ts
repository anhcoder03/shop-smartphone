import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent {
  categories: ICategory[] = [];
  data: any;
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.categoryService.getAllCategory().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.categories = this.data.data;
    });
  }
  removeItem(id: string) {
    const comfirm = window.confirm('Bạn có chắc chắn muốn xóa');
    if (comfirm) {
      this.categoryService.deleteCategory(id).subscribe((data) => {
        if (data.success) {
          this.categories = this.categories.filter(
            (item: ICategory) => item._id !== id
          );
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      });
    }
  }
}
