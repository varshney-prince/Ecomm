import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuType: String = '';
  sellerName: string = '';
  
  constructor(private route: Router) {}
  
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
}
