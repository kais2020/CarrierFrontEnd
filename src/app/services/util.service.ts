import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurModel} from "../model/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpclient:HttpClient) { }

  rechercheUtilParLoginPassword(login:string,password:string):any{
    return new  Promise(resolve => {
      this.httpclient.get<UtilisateurModel>('http://localhost:9090/util/'+login+'/'+password)
        .subscribe((resp)=>{
           if(resp!=null) resolve(); }
          ,error => alert('Erreur : '+error))
    });
  }
}
