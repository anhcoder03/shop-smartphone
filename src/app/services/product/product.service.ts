import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  Api_Url = 'http://localhost:3333/api/v1';
  getAllProduct(page: number): Observable<IData> {
    return this.http.get(`${this.Api_Url}/getProducts?page=${page}`);
  }
  getOneproduct(_id: string): Observable<any> {
    return this.http.get(`${this.Api_Url}/getProduct/${_id}`);
  }
  deleteProduct(_id: string): Observable<IData> {
    return this.http.delete(`${this.Api_Url}/remove-product/${_id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.Api_Url}/create-product`, product);
  }
  getAllcategories(): Observable<any> {
    return this.http.get(`${this.Api_Url}/get-all-category`);
  }
  UpdateProduct(product: IProduct): Observable<IData> {
    return this.http.put(
      `${this.Api_Url}/update-product/${product._id}`,
      product
    );
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `${this.Api_Url}/update-product/${product._id}`,
      product
    );
  }
}
interface IData {
  success?: boolean;
  message?: string;
  data?: IProduct | IProduct[];
  totalPage?: number;
  totalProduct?: number;
}
