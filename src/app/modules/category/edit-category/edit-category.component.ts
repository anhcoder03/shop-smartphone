import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent {
  categoryId: any = '';
  category: ICategory = {
    name: '',
    _id: '',
  };
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe((data: any) => {
        console.log(data.data);
        this.category = data.data;
        this.category = this.category;
        this.categoryForm.patchValue({
          name: this.category.name,
          _id: this.category._id,
        });
      });
  }
  categoryForm = this.formBuilder.group({
    _id: [''],
    name: ['', [Validators.required, Validators.minLength(4)]],
  });
  handleUpdateCategorySubmit() {
    if (this.categoryForm.invalid) return;
    const category: ICategory = {
      _id: this.category._id,
      name: this.categoryForm.value.name || '',
    };
    console.log('oas', this.categoryForm.value);
    this.categoryService.updateCategory(category).subscribe((data) => {
      console.log('ok', data);
      if (data.success) {
        this.toastr.success(data.message);
      } else {
        this.toastr.error(data.message);
      }
      this.router.navigateByUrl('/admin/category');
    });
  }
}
// [Feature] CRUD category
