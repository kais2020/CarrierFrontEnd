import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus :boolean;
  login:string;
  password:string;
  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth;
  }
 onSignIn(){
    this.authService.signIn(this.login,this.password).then(
      ()=> {
         this.authStatus=this.authService.isAuth;
         console.log(this.authStatus);
         this.router.navigate(['bienvenue']);
      }
    )
 }
 onSignOut(){
    this.authService.signOut();
    this.authStatus=this.authService.isAuth;
 }
}
