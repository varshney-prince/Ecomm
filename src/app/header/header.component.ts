import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuType: String = '';
  sellerName: string = '';
  searchResult:undefined|product[];
  
  constructor(private route: Router,private product:ProductService) {}
  
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore);
          console.warn('data', sellerData);
          console.warn('store', sellerStore);
          this.sellerName = sellerData[0].name;
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    console.warn('logout');
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      console.warn(element.value);
      this.product.searchProduct(element.value).subscribe((result)=>{
       
        console.warn(result);
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }

  submitSearch(val:string){
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }
}
