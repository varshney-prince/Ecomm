import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    const url:string='http://localhost:3000/products';
    return this.http.post(url,data);
  }

  productList(){
    const url:string='http://localhost:3000/products';
    return this.http.get<product[]>(url);
  }
}
