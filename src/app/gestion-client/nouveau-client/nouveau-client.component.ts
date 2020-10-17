import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";
import {ClientModel} from "../../model/client.model";

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent implements OnInit {
  clientForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private clientService : ClientService,
              private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.clientForm=this.formBuilder.group({
      id:['',Validators.required],
      code:['',Validators.required],
      nom:['',Validators.required],
      codetva:['',Validators.required],
      adresse:['',Validators.required],
      ville:['',Validators.required]
    });
  }

  onSubmitForm() {
    const formValue=this.clientForm.value;
    const newClient = new ClientModel(
      formValue['id'],
      formValue['code'],
      formValue['nom'],
      formValue['codetva'],
      formValue['adresse'],
      formValue['ville']
    );
    this.clientService.addClient(newClient);
    this.router.navigate(['/gestion-client']);

  }
}
