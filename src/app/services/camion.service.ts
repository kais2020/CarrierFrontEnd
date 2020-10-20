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
    this.getAllCamion();
  }
  emiCamionSubject(){
    this.camionSubject.next(this.camions);
  }
  getAllCamion(){
    this.httpClient.get<CamionModel[]>('htttp://localhost:9090/camions')
      .subscribe(resp=>{
        this.camions=resp;
        this.emiCamionSubject()});
  }

}


