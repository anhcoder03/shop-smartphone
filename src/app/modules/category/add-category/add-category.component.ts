import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
  });
  onHandleSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }
    const category: any = {
      name: this.categoryForm.value.name || '',
    };
    this.categoryService.addCategory(category).subscribe(
      (data) => {
        if (data.success) {
          this.toastr.success(data.message);
        }
        this.router.navigateByUrl('/admin/category');
      },
      (error) => {
        this.toastr.warning(error.error.message);
      }
    );
  }
}
