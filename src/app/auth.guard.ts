import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isSellerLoggedIn = this.sellerService.isSellerLoggedIn.getValue();

    // Use the extracted boolean value in the return statement
    return isSellerLoggedIn ;
  }
}
