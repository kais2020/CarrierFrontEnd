import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurModel} from "../model/utilisateur.model";
import {Subject} from "rxjs";
import {rejects} from "assert";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private users:UtilisateurModel[];
  userSubject= new Subject<UtilisateurModel[]>();

  constructor(private httpclient:HttpClient) {
    this.getAllUser();
  }

  emiUserSubject(){
    this.userSubject.next(this.users);
  }

  signInWithLoginAndPassword(login:string,password:string):any{
    return new  Promise((resolve,reject) => {
      this.httpclient.get<UtilisateurModel>('http://localhost:9090/util/'+login+'/'+password)
        .subscribe((resp)=> resp!=null? resolve() : reject('verifier login et password')
          ,error => reject(error));
    });
  }
  createUser(util:UtilisateurModel){
    return new Promise((resolve,reject) => {
      this.httpclient.post('http://localhost:9090/util',util)
        .subscribe(resp=>{this.getAllUser(); resolve();}
          ,error => reject(error));
    });
  }
  getAllUser(){
    this.httpclient.get<UtilisateurModel[]>('http://localhost:9090/util')
      .subscribe(resp=>{
        this.users=resp;
        this.emiUserSubject();
      },error => error);
  }
}
