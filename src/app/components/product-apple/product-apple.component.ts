import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-apple',
  templateUrl: './product-apple.component.html',
  styleUrls: ['./product-apple.component.scss'],
})
export class ProductAppleComponent {
  products: IProduct[] = [];
  data: any;
  constructor(private productService: ProductService) {
    this.productService
      .getProductByCategory('64766147e1d8643e9e50745f')
      .subscribe((data) => {
        this.data = data;
        this.products = this.data.data;
      });
  }
  formatPrice(num: number | string) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
}
