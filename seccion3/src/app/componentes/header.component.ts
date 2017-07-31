import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  //template:`<h1> Este es mi header <h1>`
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  Titulo = 'Mi encabezado';
}
