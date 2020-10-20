import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../../services/produit.service";
import {Router} from "@angular/router";
import {ProduitModel} from "../../model/produit.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.scss']
})
export class NouveauProduitComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private produitService:ProduitService,
              private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.produitForm=this.formBuilder.group({
      id:'',
      code:['',Validators.required],
      nom:['',Validators.required],
      prix:['',Validators.required]
    });
  }
  onSubmitForm(){
    const formValue=this.produitForm.value;
    const newProduit= new ProduitModel(
      formValue['id'],
      formValue['code'],
      formValue['nom'],
      formValue['prix']
    );
    this.produitService.addProduit(newProduit);
    this.router.navigate(['/gestion-produit']);
  }

}
