import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {ClientModel} from "../../model/client.model";

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss']
})
export class SingleClientComponent implements OnInit {
  client : ClientModel;
  constructor(private clientService : ClientService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
   // this.client=this.clientService.getClientById(+id);
  //  this.clientService.emitClientSubject();
  }

}
