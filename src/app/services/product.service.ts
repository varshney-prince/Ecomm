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

  deleteProduct(id:number){
    const url:string=`http://localhost:3000/products/${id}`;
    return this.http.delete(url);
  }

  getProduct(id:string){
    const url:string=`http://localhost:3000/products/${id}`;
    return this.http.get<product>(url);
  }

  updateProduct(data:product){
    const url:string=`http://localhost:3000/products/${data.id}`;
    return this.http.put(url,data);
  }

  popularProducts() {
    const url:string=`http://localhost:3000/products?_limit=3`;
    return this.http.get<product[]>(url);
  }

  trendyProducts() {
    const url:string=`http://localhost:3000/products?_limit=8`;
    return this.http.get<product[]>(url);
  }

  searchProduct(query: string) {
    const url= `http://localhost:3000/products?name=${query}`;
    console.log(url);
    return this.http.get<product[]>(url);
  }

}
