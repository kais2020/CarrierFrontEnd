import { Injectable } from '@angular/core';
import { CanActivate, Router,  UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthService,private router : Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return new Promise((resolve, reject) => {
       if(this.authService.isAuth){
         resolve(true);
       }else{
         this.router.navigate(['/auth']);
         resolve(false);
       }
     });
  }
}
