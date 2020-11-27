import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus :boolean;
  msgErreur: string;
  signInForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
              private authService : AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.initForm();
    this.authStatus=this.authService.isAuth;
  }
 onSignIn(){
    const signForm=this.signInForm.value;
    this.authService.signIn(signForm['login'],signForm['password']).then(
      ()=> {
         this.authStatus=this.authService.isAuth;
         console.log(this.authStatus);
         this.router.navigate(['bienvenue']);
      },error=>{this.msgErreur=error;}
    )
 }


  private initForm() {
    this.signInForm=this.formBuilder.group({
      login:['',Validators.required],
      password:['',Validators.required]
    });
  }
}
