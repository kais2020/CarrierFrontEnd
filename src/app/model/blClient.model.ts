import {ClientModel} from "./client.model";
import {CamionModel} from "./camion.model";
import {ProduitModel} from "./produit.model";

export class BlClientModel{
  constructor( public id:number,
               public num:string,
               public dateBl:Date,
               public qte:number,
               public ht:number,
               public taxe:number,
               public tva:number,
               public ttc:number,
               public client:ClientModel,
               public camion:CamionModel,
               public produit:ProduitModel ) {
  }
}
