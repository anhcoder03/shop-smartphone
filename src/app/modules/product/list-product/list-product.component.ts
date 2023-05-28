import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  products: IProduct[] = [];
  data: any;

  constructor(
    private productservice: ProductService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.productservice.getAllProduct().subscribe((data) => {
      this.data = data;
      this.products = this.data.data;
    });
  }
  onhandleremove(_id: string) {
    const comfirm = window.confirm('Bạn có chắc chắn muốn xóa');

    if (comfirm) {
      this.productservice.deleteProduct(_id).subscribe((data) => {
        if (data.success) {
          this.toastr.success(data.message);
          this.products = this.products.filter(
            (item: IProduct) => item._id !== _id
          );
        } else {
          this.toastr.error(data.message);
        }
      });
    }
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
