import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UtilisateurModel} from "../../../model/utilisateur.model";

@Component({
  selector: 'app-nouveau-util',
  templateUrl: './nouveau-util.component.html',
  styleUrls: ['./nouveau-util.component.scss']
})
export class NouveauUtilComponent implements OnInit {
  signUpForm : FormGroup;
  msgErreur:string;

  constructor(private formBuilder:FormBuilder,
              private utilService:UtilService,
              private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signUpForm=this.formBuilder.group({
      id: [''],
      nom:['',Validators.required],
      login:['',Validators.required],
      password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit() {
    return new Promise((resolve, reject) => {
      const formValue = this.signUpForm.value;
      const newUtil =new UtilisateurModel(
        formValue['id'],
        formValue['nom'],
        formValue['login'],
        formValue['password']
      );
      this.utilService.createUser(newUtil).then(
        ()=>{
          this.router.navigate(['/gestion-util']);
          resolve();
        },(error)=>{this.msgErreur=error; reject(error);}
      )

    });
  }
}
