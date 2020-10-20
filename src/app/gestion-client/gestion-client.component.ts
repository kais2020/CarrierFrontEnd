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

  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.clientSubscription=this.clientService.clientSubject.subscribe(
      (clients)=>{
        this.clients=clients
      }
    );
    this.clientService.emiClientsSubject();
  }
  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id);

  }
}

