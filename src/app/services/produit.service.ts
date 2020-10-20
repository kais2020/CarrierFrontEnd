import {Injectable, OnInit} from '@angular/core';
import {ProduitModel} from "../model/produit.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produit:ProduitModel[];

  produitSubject = new Subject<ProduitModel[]>();

  constructor(private httpClient: HttpClient) {
    this.getAllProduits();
  }

  emiProduitSubject(){
    this.produitSubject.next(this.produit);
  }

  getAllProduits() {
    this.httpClient.get<ProduitModel[]>('http://localhost:9090/produits')
     .subscribe(resp=> {
       this.produit=resp;
       this.emiProduitSubject();
     });
  }
  addProduit(produit : ProduitModel) {
    this.httpClient.post('http://localhost:9090/produits', produit)
      .subscribe(resp => { this.getAllProduits();},
        error => alert('Erreur : ' + error));
  }
  deleteProduit(id : number){
    this.httpClient.delete('http://localhost:9090/produits/id/'+id)
      .subscribe(resp=>{this.getAllProduits();})
  }

}
