import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  //template:`<h1> Este es mi header <h1>`
  templateUrl: './body.component.html',
  //styleUrls: ['./header.component.css']
})



export class BodyComponent {
  mostrar:boolean=false;
  frase:any = { //creando un objeto:cualquiera
     mensaje: "Un gran poder, requiere una gran responsabilidad",
     autor: "Ben Parker",
  }
//array
  personajes:string[]=["duvi","alex","fidel"];

}
