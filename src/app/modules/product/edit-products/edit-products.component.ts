import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent {
  image: any = [];
  listImage: any = [];
  categories: any = [];
  product: any = {
    productName: '',
    price: 0,
    image: '',
    description: '',
    categoryId: '',
  };
  productForm = this.formBuilder.group({
    productName: ['', [Validators.required]],
    price: [0],
    image: [''],
    description: ['', [Validators.required]],
    categoryId: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const _id = String(param.get('id'));
      this.productService.getOneproduct(_id).subscribe((data) => {
        this.product = data.data;
        console.log(data.data);

        this.productForm.patchValue({
          categoryId: this.product.categoryId,
          productName: this.product.productName,
          price: this.product.price,
          image: this.product.image,
          description: this.product.description,
        });
      });
    });
  }
  handleSelectImage = (e: any) => {
    const files = e.target.files;
    if (files.length === 0) {
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    this.uploadImageService.handleUploadImage(formData).subscribe((data) => {
      this.listImage = data;
      this.image = this.listImage.urls[0];
      this.productForm.patchValue({ image: this.image.url });
      console.log(this.image);
    });
  };
  handleDeteleImage(publicId: string) {
    this.uploadImageService
      .handleDeleteImage(publicId)
      .subscribe((data: Data) => {
        if (data.success) {
          this.image = [];
        }
      });
  }
  ngOnInit() {
    this.getcategories();
  }
  getcategories() {
    this.productService.getAllcategories().subscribe((data) => {
      this.categories = data.data as any[];
      console.log(this.categories);
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    const products: any = {
      productName: this.productForm.value.productName || '',
      price: this.productForm.value.price || 0,
      image: this.image.url,
      description: this.productForm.value.description || '',
      categoryId: this.productForm.value.categoryId || '',
    };

    this.productService.UpdateProduct(products).subscribe(() => {
      alert('Thêm thành công ');
    });
  }
}

type Data = {
  success?: boolean;
  message?: string;
};
