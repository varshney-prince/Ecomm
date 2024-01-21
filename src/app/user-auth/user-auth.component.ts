import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {

  showLogin:boolean=true
  authError:string="";

  signUp(data:any){

  }

  openLogin(){

  }

  login(data:any){

  }

  openSignUp(){
    
  }
}
