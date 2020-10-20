import {ClientModel} from "./client.model";

export class CamionModel{
  constructor(public id : number,
              public code :string,
              public matricule:string,
              public marque:string,
              public client:ClientModel) {
  }
}
