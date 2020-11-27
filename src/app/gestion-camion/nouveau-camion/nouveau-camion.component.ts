import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CamionService} from "../../services/camion.service";
import {Router} from "@angular/router";
import {CamionModel} from "../../model/camion.model";
import {ClientService} from "../../services/client.service";
import {ClientModel} from "../../model/client.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nouveau-camion',
  templateUrl: './nouveau-camion.component.html',
  styleUrls: ['./nouveau-camion.component.scss']
})
export class NouveauCamionComponent implements OnInit {
  camionForm : FormGroup;
  listClient:ClientModel[];
  clientSubscription:Subscription;
  clientData: any;





  constructor(private formBuilder : FormBuilder,
              private camionService : CamionService,
              private clientService : ClientService,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm();
    this.clientSubscription=this.clientService.clientSubject
      .subscribe(clients=>this.listClient=clients);
    this.clientService.getAllClient();

  }
  initForm(){
    this.camionForm=this.formBuilder.group({
      id:'',
      code:'',
      matricule:'',
      marque:'',
      client:''
    });
  }

  onSubmitForm() {
    const formValue =this.camionForm.value;
    const newCamion = new CamionModel(
      formValue['id'],
      formValue['code'],
      formValue['matricule'],
      formValue['marque'],
      JSON.parse(this.clientData)
    );

console.log(newCamion);

   this.camionService.addCamion(newCamion);
    this.router.navigate(['/gestion-camion']);



  }
}
