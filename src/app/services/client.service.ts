import { Injectable } from '@angular/core';
import {ClientModel} from "../model/client.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients : ClientModel[];

  clientSubject=new Subject<ClientModel[]>();

  constructor(private httpClient : HttpClient) {
    this.getAllClient();
  }

  emiClientsSubject(){
    this.clientSubject.next(this.clients);
  }
  addClient(client:ClientModel){
    this.httpClient.post('http://localhost:9090/clients',client)
      .subscribe(resp=>{
        this.getAllClient();
      this.emiClientsSubject();})

  }
  getAllClient(){
    this.httpClient.get<ClientModel[]>('http://localhost:9090/clients')
      .subscribe(resp=> {
          this.clients = resp;
          this.emiClientsSubject();
        }
      );

  }
  deleteClient(id:number){
    this.httpClient.delete('http://localhost:9090/clients/id/'+id)
      .subscribe(resp=>this.getAllClient()
      ,error => alert('Erreur : '+error));
  }
}
