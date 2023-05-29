import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interface/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  Api_Url = 'http://localhost:3333/api/v1';

  constructor(private http: HttpClient) {}
  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.Api_Url}/get-all-category`);
  }
  getCategoryById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.Api_Url}/get-category/${id}`);
  }
  deleteCategory(id: string): Observable<IData> {
    return this.http.delete(`${this.Api_Url}/remove-category/${id}`);
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(
      `${this.Api_Url}/update-category/${category._id}`,
      category
    );
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(
      `${this.Api_Url}/create-category`,
      category
    );
  }
}
interface IData {
  success?: boolean;
  message?: string;
  data?: ICategory | ICategory[];
  totalPage?: number;
}
