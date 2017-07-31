

/////////////////////////////////////////////////////////////////////////////////////
////////////////////cap33 - Bootstrap y 1er Componente////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

cap 33  Utilizando bootstrap 4 
  https://v4-alpha.getbootstrap.com/
  CDN en el index.html

 creando nuevo componente
   1 crear carpeta
      app/carpetaComponente
   2- crear archivo
       header.component.ts
   3-    
         import { Component } from '@angular/core';  //libreria de componente

         //crear el decorador del componente
			@Component({
			  selector: 'app-header',
			  template:`<h1> Este es mi header <h1>`, //manual el template "template"
			  //templateUrl: './header.component.html',  //usando el archivo "templateUrl"
			  styleUrls: ['./header.component.css']
			})

			export class HeaderComponent {
			  Titulo = 'Mi encabezado';  
			}

	4-  Como angular no sabe que mi nuevo componente existe, el "app.module.ts"  es quien le dice a angular por tanto:
		 -Importar tengo que importar mi clase 
		    import { HeaderComponent } from './componentes/header.component';
		 - Declararla 
			@NgModule({
			  declarations: [ //min 8.10 listado de componentes q tendra nuestra app
			    AppComponent,
		    	HeaderComponent
		  	],		

	5- Ahora si puedo hacer uso de este componente	  	
   html
    <app-mibarra> </app-mibarra>


/////////////////////////////////////////////////////////////////////////////////////
////////////////////cap34 - Poniendo mi componente en HTML ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
https://v4-alpha.getbootstrap.com/getting-started/introduction/
	creo mi header
		header.component.html
	creo mi body	




/////////////////////////////////////////////////////////////////////////////////////
////////////////////cap35 - Generando Componente por consola y "style.css" //////////////
/////////////////////////////////////////////////////////////////////////////////////

creo componente de forma automatica
  g(generame)
  c(componente)
 ng g c footer
 	esto me genera cada elemento del componente
 	y ademas me lo actualiza en el "app.module.ts"  (ASEGURARNOS DE Q SI LO ACTUALIZO)
 	installing component
	  create src/app/footer/footer.component.css
	  create src/app/footer/footer.component.html
	  create src/app/footer/footer.component.spec.ts
	  create src/app/footer/footer.component.ts
	  update src/app/app.module.ts

	  POR EL MOMENTO EN EL .TS
	   voy a quitar el .onInit se vera más adelante


tocando style.css


/////////////////////////////////////////////////////////////////////////////////////
////////////////////cap38 - "Body y bootstrap" ///////////////////////
/////////////////////////////////////////////////////////////////////////////////////
 https://v4-alpha.getbootstrap.com/components/card/
 https://v4-alpha.getbootstrap.com/components/list-group/

/////////////////////////////////////////////////////////////////////////////////////
////////////////////cap38 - "Directivas estructurales"  ngIF ngFOR/////////////////////
/////////////////////////////////////////////////////////////////////////////////////

*ngIf="false" -->que no muestre nada. Ademas el "elemento no existe lo destruye del dom"
				--Aparece una referencia

*ngFor : ciclo "let variable of arreglo" : repite la cantidad del arreglo
			<li *ngFor="let varPersona of personajes" class="list-group-item">Cras justo odio</li>

		variable conteo de ciclo "index"	
		<li *ngFor="let persona of personajes; let i = index" class="list-group-item">
        	{{i}}.{{persona}}
        </li>			

invocando evento click desde html. Tomando en cuenta la "variable mostrar" q cree
(click) ="mostrar=!mostrar">				

  	<button type="button" class="btn btn-outline-primary btn-block"
      (click) ="mostrar=!mostrar">
      Mostrar/Ocultar
    </button>