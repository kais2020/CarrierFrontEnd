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
  listCamion:CamionModel[];
  camionSubscription : Subscription;

  constructor(private camionService:CamionService) { }

  ngOnInit(): void {
    this.camionSubscription=this.camionService.camionSubject
      .subscribe(camions=>{
        this.camions=camions;
        this.listCamion=camions;});

    this.camionService.getAllCamion();
  }
  onDeleteCamion(id:number){
    this.camionService.deleteCamion(id);
  }

  findCamionByMatricule(value: string) {
    this.listCamion=this.camions
      .filter(camion=>camion.matricule.toUpperCase().includes(value.toUpperCase()));

  }

  findCamionByClient(value: string) {
    this.listCamion=this.camions
      .filter(camion=>camion.client.nom.toUpperCase().includes(value.toUpperCase()));

  }
}
