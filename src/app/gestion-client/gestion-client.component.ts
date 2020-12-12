import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientModel} from "../model/client.model";
import {Subscription} from "rxjs";
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit,OnDestroy {
  clients :ClientModel[];
  listClient:ClientModel[];
  clientSubscription : Subscription;

  constructor(private clientService: ClientService,
              private router:Router) {

  }
  ngOnInit(): void {
    this.clientSubscription=this.clientService.clientSubject.subscribe(
      (clients)=>{
        this.clients=clients;
        this.listClient=clients;
      }
    );
    this.clientService.getAllClient();
  }
  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }
  onDeleteClient(id: number) {
    this.clientService.deleteClient(id);

  }
  onViewClient(id: number) {

    this.router.navigate(['/single-client',id]);

  }

  findClientByNom(value: string) {
    this.listClient=this.clients.filter(client=>client.nom.toLowerCase().includes(value.toLowerCase()));

  }

  findClientByCode(value: string) {
    this.listClient=this.clients.filter(client=>client.code.toLowerCase().includes(value.toLowerCase()));

  }
}

