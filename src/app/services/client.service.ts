import { Injectable } from '@angular/core';
import {ClientModel} from "../model/client.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients : ClientModel[]=[
    {
      id:1,
      code: '001',
      nom: 'kais',
      codetva: '1212AZE000',
      adresse: 'tunis',
      ville: 'Tunis',
      tels: ['21121122','98989898']
    },
    {
      id:2,
      code: '002',
      nom: 'kais',
      codetva: '1212AZE000',
      adresse: 'tunis',
      ville: 'Tunis',
      tels: ['21121122','98989898']
    }
  ];
  clientSubject=new Subject<ClientModel[]>();

  emiClients(){
    this.clientSubject.next(this.clients.slice());
  }
  addClient(client:ClientModel){
    this.clients.push(client);
    this.emiClients();
  }

  constructor() { }
}
