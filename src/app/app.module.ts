import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionCamionComponent } from './gestion-camion/gestion-camion.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { GestionBlclientComponent } from './gestion-blclient/gestion-blclient.component';
import { NouveauClientComponent } from './gestion-client/nouveau-client/nouveau-client.component';
import { ModifierClientComponent } from './gestion-client/modifier-client/modifier-client.component';
import { ModifierProduitComponent } from './gestion-produit/modifier-produit/modifier-produit.component';
import { NouveauProduitComponent } from './gestion-produit/nouveau-produit/nouveau-produit.component';
import { NouveauCamionComponent } from './gestion-camion/nouveau-camion/nouveau-camion.component';
import { ModifierCamionComponent } from './gestion-camion/modifier-camion/modifier-camion.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from "./services/auth.service";
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { SingleClientComponent } from './gestion-client/single-client/single-client.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from "./services/auth-guard.service";
import {ClientService} from "./services/client.service";
import {ProduitService} from "./services/produit.service";
import {UtilService} from "./services/util.service";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GestionClientComponent,
    GestionCamionComponent,
    GestionProduitComponent,
    GestionBlclientComponent,
    NouveauClientComponent,
    ModifierClientComponent,
    ModifierProduitComponent,
    NouveauProduitComponent,
    NouveauCamionComponent,
    ModifierCamionComponent,
    AuthComponent,
    BienvenueComponent,
    SingleClientComponent,
    FourOhFourComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService,
    AuthService,
    AuthGuardService,
    ProduitService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
