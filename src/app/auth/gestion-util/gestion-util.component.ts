import { Component, OnInit } from '@angular/core';
import {UtilisateurModel} from "../../model/utilisateur.model";
import {UtilService} from "../../services/util.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gestion-util',
  templateUrl: './gestion-util.component.html',
  styleUrls: ['./gestion-util.component.scss']
})
export class GestionUtilComponent implements OnInit {
  utils: UtilisateurModel[];
  utilSubscription:Subscription;


  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilSubscription=this.utilService.userSubject
      .subscribe(users=>this.utils=users);
    this.utilService.emiUserSubject();
  }

}
