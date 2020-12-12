import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ClientModel} from "../../model/client.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recherche-client',
  templateUrl: './recherche-client.component.html',
  styleUrls: ['./recherche-client.component.scss']
})
export class RechercheClientComponent implements OnInit {
  clients:ClientModel[];
  clientSubscription:Subscription;
  table;tr;choix;
  @Output() childEvent=new EventEmitter();



  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientSubscription=this.clientService.clientSubject
      .subscribe(clients=> this.clients=clients);
    this.clientService.getAllClient();
    this.table = document.getElementById("myTable");
    this.tr = this.table.getElementsByTagName("tr");
    this.choix=document.getElementsByName("choix");
  }
  findClient(inputText:string,col:number) {
    // Declare variables
    let input, filter, td, i, txtValue;
    input = document.getElementById(inputText);
    filter = input.value.toUpperCase();


    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < this.tr.length; i++) {
      td = this.tr[i].getElementsByTagName("td")[col];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          this.tr[i].style.display = "";
        } else {
          this.tr[i].style.display = "none";
        }
      }
    }
  }

  onChange(value) {
    this.childEvent.emit(value);

  }

}
