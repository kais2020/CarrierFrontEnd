import { Component, OnInit } from '@angular/core';
import {BlClientModel} from "../model/blClient.model";
import {Subscription} from "rxjs";
import {BlClientService} from "../services/bl-client.service";

@Component({
  selector: 'app-gestion-blclient',
  templateUrl: './gestion-blclient.component.html',
  styleUrls: ['./gestion-blclient.component.scss']
})
export class GestionBlclientComponent implements OnInit {
  blClients:BlClientModel[];
  blClientSubscription:Subscription;

  constructor(private blClientService:BlClientService) { }

  ngOnInit(): void {
    this.blClientSubscription=this.blClientService.blClientSubject
      .subscribe(resp=>  this.blClients=resp );
    this.blClientService.getAllblClient();
  }

}
