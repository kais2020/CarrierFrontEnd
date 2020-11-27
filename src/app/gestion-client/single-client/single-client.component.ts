import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientModel} from "../../model/client.model";

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss']
})
export class SingleClientComponent implements OnInit {
  client : ClientModel;
  constructor(private clientService : ClientService ,
              private route : ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.client=new ClientModel(null,'','','','','');
    const id = this.route.snapshot.params['id'];
    this.clientService.getSingleClient(id).then(
      (resp:ClientModel)=>{
        this.client=resp;
      }
    );
  }
  onBack(){
    this.router.navigate(['/gestion-client'])
  }

}
