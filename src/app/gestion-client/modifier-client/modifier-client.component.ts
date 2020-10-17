import { Component, OnInit } from '@angular/core';
import {ClientModel} from "../../model/client.model";
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../../services/client.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
   clients : ClientModel[];
   clientSubscription : Subscription;

  url:"http://localhost:9090/clients";
  constructor(private clientService : ClientService) {

  }

  ngOnInit(): void {
    this.clientSubscription=this.clientService.clientSubject.subscribe(
      (clients:ClientModel[])=>{
        this.clients=clients
      }
    );
    this.clientService.emiClients();
  }



}
