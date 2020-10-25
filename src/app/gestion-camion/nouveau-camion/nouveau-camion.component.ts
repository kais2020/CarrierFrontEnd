import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CamionService} from "../../services/camion.service";
import {Router} from "@angular/router";
import {CamionModel} from "../../model/camion.model";
import {ClientService} from "../../services/client.service";
import {ClientModel} from "../../model/client.model";

@Component({
  selector: 'app-nouveau-camion',
  templateUrl: './nouveau-camion.component.html',
  styleUrls: ['./nouveau-camion.component.scss']
})
export class NouveauCamionComponent implements OnInit {
  camionForm : FormGroup;
  clientRechercher:ClientModel
  client_id:number;

  constructor(private formBuilder : FormBuilder,
              private camionService : CamionService,
              private clientService : ClientService,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.camionForm=this.formBuilder.group({
      id:'',
      code:'',
      matricule:'',
      marque:'',
      client_id:''
    });
  }

  onSubmitForm() {
    const formValue =this.camionForm.value;
    this.clientService.getClient(this.client_id);
    console.log(this.clientRechercher);
    const newCamion = new CamionModel(
      formValue['id'],
      formValue['code'],
      formValue['matricule'],
      formValue['marque'],
      this.clientRechercher
    );
    this.camionService.addCamion(newCamion);
    this.router.navigate(['/gestion-camion']);
  }
}
