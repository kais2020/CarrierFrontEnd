export class ClientModel{

  constructor( public id: number,
               public code: string,
               public nom: string,
               public codetva: string,
               public adresse: string,
               public ville: string,
               public tels?: string[]) { }
}
