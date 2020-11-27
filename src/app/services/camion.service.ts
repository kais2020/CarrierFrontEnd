import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CamionModel} from "../model/camion.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CamionService {
  private camions: CamionModel[];
  camionSubject = new Subject<CamionModel[]>();

  constructor(private httpClient: HttpClient) {
  }
  emiCamionSubject(){
    this.camionSubject.next(this.camions);
  }
  getAllCamion(){
    this.httpClient.get<CamionModel[]>('http://localhost:9090/camions')
      .subscribe(resp=>{
        this.camions=resp;
        this.emiCamionSubject();});
  }
  addCamion(camion :CamionModel){
    this.httpClient.post('http://localhost:9090/camions',camion)
      .subscribe(resp=>{
        this.getAllCamion();
        this.emiCamionSubject();}
      ,error => alert("Erreur : "+error));
  }
  deleteCamion(id:number){
   return this.httpClient.delete('')
      .subscribe(resp=>'Suprission effectué',
        error =>  'Erreur : '+error);
  }

}


