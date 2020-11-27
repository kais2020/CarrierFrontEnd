import { Injectable } from '@angular/core';
import {UtilService} from "./util.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean=false;


  constructor(private utilService:UtilService,
              private router:Router) { }
  signIn(login:string,password:string){
    return new Promise(
      (resolve,reject) =>{

        this.utilService.signInWithLoginAndPassword(login,password).then(
          ()=>{
            this.isAuth=true;
            resolve();
          },
          (error)=>{reject(error);}
        );
      } );

  }
  signOut(){
    this.isAuth=false;
    this.router.navigate(['/auth'])
  }
}
