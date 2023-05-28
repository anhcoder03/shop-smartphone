import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  Api_Url = "http://localhost:3333/api/v1"
  getAllProduct():Observable<any>{
   return this.http.get(`${this.Api_Url}/getProducts`)
  }
  deleteProduct(_id:string):Observable<any>{
    return this.http.delete(`${this.Api_Url}/remove-product/${_id}`)
  }
}
