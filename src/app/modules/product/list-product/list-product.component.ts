import { Component } from '@angular/core';

import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products:any =[];
   constructor(private productservice : ProductService){
   }
   ngOnInit(){
    this.productservice.getAllProduct().subscribe((data)=>{
      this.products = data.data;
      console.log(this.products.data);
      console.log(data);
    })
   }
   onhandleremove(_id:string){
    const comfirm = window.confirm("Bạn có chắc chắn muốn xóa");
    if(comfirm){
      this.productservice.deleteProduct(_id).subscribe(()=>{
        this.products = this.products.filter((item:any)=> item._id !== _id)
      })
    }
   }
}
