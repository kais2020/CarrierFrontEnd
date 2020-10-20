import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth=false;

  constructor() { }
  signIn(){
    return new Promise(((resolve, reject) => {
      setTimeout(()=>{
        this.isAuth=true;
        resolve(true);
      },1000)
    }))
  }
  signOut(){
    this.isAuth=false;
  }
}
