import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient , private router:Router) { }
  userSignUp(data:signUp){
    
    const url:string='http://localhost:3000/seller';
    return this.http.post(url,data,{observe:'response'}).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:login){
    const url:string=`http://localhost:3000/seller?email=${data.email}&password=${data.password}`;
    this.http.get(url,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.log("login successful");
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
      else{
        console.log("login fail");
        this.isLoginError.emit(true);
      }
    })
  
  }
}
