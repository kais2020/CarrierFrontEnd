import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionClientComponent} from "./gestion-client/gestion-client.component";
import {GestionCamionComponent} from "./gestion-camion/gestion-camion.component";
import {GestionProduitComponent} from "./gestion-produit/gestion-produit.component";
import {GestionBlclientComponent} from "./gestion-blclient/gestion-blclient.component";
import {NouveauClientComponent} from "./gestion-client/nouveau-client/nouveau-client.component";
import {ModifierClientComponent} from "./gestion-client/modifier-client/modifier-client.component";
import {NouveauProduitComponent} from "./gestion-produit/nouveau-produit/nouveau-produit.component";
import {ModifierProduitComponent} from "./gestion-produit/modifier-produit/modifier-produit.component";
import {NouveauCamionComponent} from "./gestion-camion/nouveau-camion/nouveau-camion.component";
import {ModifierCamionComponent} from "./gestion-camion/modifier-camion/modifier-camion.component";
import {AuthComponent} from "./auth/auth.component";
import {BienvenueComponent} from "./bienvenue/bienvenue.component";
import {SingleClientComponent} from "./gestion-client/single-client/single-client.component";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  { path: 'gestion-client' ,canActivate:[AuthGuardService], component: GestionClientComponent } ,
  { path: 'gestion-camion' ,canActivate:[AuthGuardService], component: GestionCamionComponent } ,
  { path: 'gestion-produit' ,canActivate:[AuthGuardService], component: GestionProduitComponent } ,
  { path: 'gestion-blclient' ,canActivate:[AuthGuardService], component: GestionBlclientComponent },
  { path: 'nouveau-client' , component: NouveauClientComponent },
  { path: 'modifier-client' , component: ModifierClientComponent },
  { path: 'modifier-produit' , component: ModifierProduitComponent },
  { path: 'nouveau-produit' , component: NouveauProduitComponent },
  { path: 'liste-client/:id' , component: SingleClientComponent},
  { path: 'nouveau-camion' , component: NouveauCamionComponent },
  { path: 'modifier-camion' , component: ModifierCamionComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bienvenue' , component: BienvenueComponent},
  { path: '' , component : BienvenueComponent},
  { path: 'not-found' , component : FourOhFourComponent},
  { path: '**' , redirectTo : 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
