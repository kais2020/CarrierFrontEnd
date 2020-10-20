import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProduitModel} from "../model/produit.model";
import {Subscription} from "rxjs";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.scss']
})
export class GestionProduitComponent implements OnInit , OnDestroy{

  produits : ProduitModel[];
  produitSubscription : Subscription;


  constructor(private produitService: ProduitService) {


  }

  ngOnInit(): void {

    this.produitSubscription=this.produitService.produitSubject.subscribe(
      produits=> {this.produits=produits;}
    );
    this.produitService.emiProduitSubject();

  }
  ngOnDestroy() {
    this.produitSubscription.unsubscribe();
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id);

  }

  modifierProduit() {

  }
}
