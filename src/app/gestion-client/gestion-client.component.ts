import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientModel} from "../model/client.model";
import {Subscription} from "rxjs";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit,OnDestroy {
  clients :ClientModel[];
  clientSubscription : Subscription;

  constructor(private serviceClient: ClientService) { }

  ngOnInit(): void {
    this.clientSubscription=this.serviceClient.clientSubject.subscribe(
      (clients)=>{
        this.clients=clients
      }
    );
    this.serviceClient.emiClients();
  }
  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }

}

