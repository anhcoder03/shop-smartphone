import { Component,OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product!: IProduct;  
  data: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    
    const productId = this.route.snapshot.params['_id'];
    this.productService.getProductById(productId).subscribe(( productData)  => {
      console.log('productId:', productId);
      this.product = productData;
      console.log('productData:', productData);
    
  });
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  }

  addToCart() {
    
  }
  

}
