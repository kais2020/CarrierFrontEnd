import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import "rxjs-compat/add/observable/interval";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'carrier';
  secondes : number;
  conterSubsription : Subscription;
  constructor() {
  }
  ngOnInit() {
    const conter = Observable.interval(1000);
    this.conterSubsription=conter.subscribe((value:number)=> {this.secondes=value});
  }
  ngOnDestroy() {
    this.conterSubsription.unsubscribe();
  }
}

