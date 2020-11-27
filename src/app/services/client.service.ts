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
  }

  emiClientsSubject(){
    this.clientSubject.next(this.clients);
  }
  getAllClient()  {
    this.httpClient.get<ClientModel[]>('http://localhost:9090/clients')
      .subscribe(resp=> {
          this.clients = resp;
          this.emiClientsSubject();
        }
      );

  }
  postClient(client:ClientModel){
    this.httpClient.post('http://localhost:9090/clients',client)
      .subscribe(resp=>{
        this.getAllClient();
      this.emiClientsSubject();})

  }

 async getSingleClient(id : number)  {

      return await this.httpClient.get<ClientModel>('http://localhost:9090/clients/id/'+id).toPromise();
  }
  deleteClient(id : number){
    this.httpClient.delete('http://localhost:9090/clients/id/'+id)
      .subscribe(resp=>this.getAllClient()
      ,error => alert('Erreur : '+error));
  }
}
