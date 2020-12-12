import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientModel} from "../../model/client.model";
import {CamionModel} from "../../model/camion.model";
import {ProduitModel} from "../../model/produit.model";
import {Subscription} from "rxjs";
import {ClientService} from "../../services/client.service";
import {CamionService} from "../../services/camion.service";
import {ProduitService} from "../../services/produit.service";
import {BlClientModel} from "../../model/blClient.model";
import {tryCatch} from "rxjs/internal-compatibility";


@Component({
  selector: 'app-nouveau-blclient',
  templateUrl: './nouveau-blclient.component.html',
  styleUrls: ['./nouveau-blclient.component.scss']
})
export class NouveauBlclientComponent implements OnInit {
  blClientForm: FormGroup;
  listClient:ClientModel[];
  clientSubscription:Subscription;
  listCamion:CamionModel[];
  camionSubscription:Subscription;
  listProduit:ProduitModel[];
  produitSubscription:Subscription;
  nomClient: any;
  clientSelectionner:ClientModel=new ClientModel(null,'','','','','');
  camionSelectionner:CamionModel=new CamionModel(null,'','','',null);
  produitSelectionner:ProduitModel=new ProduitModel(null,'','',null);
  client: string;
  ht:number=0;
  taxe:number=0;
  tva:number=0;

  constructor(private formBuilder:FormBuilder,
              private clientService:ClientService,
              private camionService:CamionService,
              private produitService:ProduitService) { }

  ngOnInit(): void {
    this.initForm();
    this.clientSubscription=this.clientService.clientSubject
    .subscribe(clients=>this.listClient=clients);
    this.clientService.getAllClient();
    this.camionSubscription=this.camionService.camionSubject
      .subscribe(camions=>this.listCamion=camions);
    this.camionService.getAllCamion();
    this.produitSubscription=this.produitService.produitSubject
      .subscribe(produits=> this.listProduit=produits);
    this.produitService.getAllProduits();

  }
  initForm(){
    this.blClientForm=this.formBuilder.group({
      id:'',
      num:'',
      dateBl:'',
      qte:'',
      puvente:'',
      ht:[{value:0,disabled:true}],
      taxe:[{value:0,disabled:true}],
      tva:[{value:0,disabled:true}],
      ttc:'',
      client:'',
      camion:'',
      produit:''
    });
  }

  onSubmitForm() {
    const formValue=this.blClientForm.value;
    const newBlClient= new BlClientModel(
      formValue['id'],  formValue['num'],  formValue['dateBl'], formValue['qte'],
      formValue['ht'],formValue['taxe'],formValue['tva'],formValue['ttc'],
      this.clientSelectionner,  this.camionSelectionner,
       this.listProduit.find(produit=>produit.code===formValue['produit'])

    )
    console.log(newBlClient);


  }


  onClientSelectionner(code:string) {
    console.log(code);

    const findClient= this.listClient.find(client=>client.code===code);
    findClient!=null ?  this.clientSelectionner=findClient:
    this.clientSelectionner=new ClientModel(null,'','','','','');
     }

  onCamionSelectionner() {

    const findCamion=this.listCamion.find(camion=>camion.matricule===this.blClientForm.value['camion']);
    if(findCamion!=null ) {
      this.camionSelectionner=findCamion;

      // @ts-ignore
      document.getElementById('code-client').value=findCamion.client.code;
      this.onClientSelectionner(findCamion.client.code);
    }
    else
    {
      this.camionSelectionner = new CamionModel(null, '', '', '', null);
    }

  }

  onProduitSelectionner() {
    const findProduit=this.listProduit.find(produit=>produit.code===this.blClientForm.value['produit']);
    findProduit!=null? this.produitSelectionner=findProduit:
      this.produitSelectionner=new ProduitModel(null,'','',null);
  }


  onCalcule(value: string) {
    if(value.length!=0) {
        const qte: number = parseFloat(value);
        const pu = this.produitSelectionner.prix;
        this.ht = qte * pu;
        this.taxe = this.ht * 0.01;
        this.tva = (this.ht + this.taxe) * 0.19;
    }else {
      this.ht = 0;
      this.taxe = 0;
      this.tva = 0;

    }


  }
}
