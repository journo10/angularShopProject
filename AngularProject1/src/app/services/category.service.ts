import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:3000/categories';
  
  constructor(private http: HttpClient) {}

  //Categories
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
