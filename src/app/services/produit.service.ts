import { Injectable } from '@angular/core';
import {ProduitModel} from "../model/produit.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produit:ProduitModel[]=[];
  produitSubject = new Subject<ProduitModel[]>();

  constructor() { }
  emiProduit(){
    this.produitSubject.next(this.produit.slice());
  }
  addProduit(produit:ProduitModel){
    this.produit.push(produit);
    this.emiProduit();
  }
}
