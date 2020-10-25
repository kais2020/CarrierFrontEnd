import { Injectable } from '@angular/core';
import {UtilService} from "./util.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean=false;


  constructor(private utilService:UtilService) { }
  signIn(login:string,password:string){
    return new Promise(
      (resolve) =>{

        this.utilService.rechercheUtilParLoginPassword(login,password).then(
          ()=>{
            this.isAuth=true;
            resolve();
          }
        );
      } );

  }
  signOut(){
    this.isAuth=false;
  }
}
