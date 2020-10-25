import { Component, OnInit } from '@angular/core';
import {CamionModel} from "../model/camion.model";
import {Subscription} from "rxjs";
import {CamionService} from "../services/camion.service";

@Component({
  selector: 'app-gestion-camion',
  templateUrl: './gestion-camion.component.html',
  styleUrls: ['./gestion-camion.component.scss']
})
export class GestionCamionComponent implements OnInit {
  camions : CamionModel[];
  camionSubscription : Subscription;

  constructor(private camionService:CamionService) { }

  ngOnInit(): void {
    this.camionSubscription=this.camionService.camionSubject
      .subscribe(camions=> this.camions=camions);
    this.camionService.emiCamionSubject();
  }

}
