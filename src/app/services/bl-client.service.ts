import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlClientModel} from "../model/blClient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlClientService {
  private blClients:any[];
  blClientSubject = new Subject<BlClientModel[]>()

  constructor(private httpClient:HttpClient) { }
  getAllblClient(){
    this.httpClient.get<any[]>('http://localhost:9090/blclients')
      .subscribe(resp=> {
        this.blClients = resp;
        this.emiBlClientSubject();
      });

  }
  emiBlClientSubject(){
    this.blClientSubject.next(this.blClients);
  }
}
