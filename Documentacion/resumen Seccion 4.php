¿Qué veremos en esta sección?
Sección 4, clase 39 -60
A continuación vamos a aprender sobre los siguientes temas:
	- Crearemos una aplicación de una sola página (Single Page Application)
	- Creación de proyectos de Angular usando el CLI (Command Line Interface)
	- Instalando bootstrap o librerías de terceros usando el Angular-CLI
	- Creación de rutas de nuestra aplicación
	- Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
	- Uso del modulo Router, que nos permite movernos de página mediante código.
	- Obtención de parámetros vía URL.
	- Configuración de nuestro primer servicio en Angular para el manejo de la data.
	- Breve introducción a los Pipes 
	- Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.
Durante la sección, tendremos una tarea práctica bastante retadora pero servirá de reforzamiento de todo lo que veremos en esta sección.


npm install zone.js@0.8.5 --save


43 - 
  ng g c  components/shared/navbar

44- 
	Para no tener q especificar ficheros en el index, mejor lo instalamos
	https://v4-alpha.getbootstrap.com/getting-started/download/#package-managers


	Para instalar bootstrap y sus dependencia (package.json)
	 "package.json": Agregando dependencia 
	 		--save: porque necesitamos q este archivo se ponga en el paquete json ("package.json")
		npm install bootstrap@4.0.0-alpha.6 --save
		npm install jquery --save	
		npm install tether --save	

	y luego manualmente nosotros especificamos los ficheros con los que va a trabajar las dependencias
	"angular-cli.json"
	       "styles": [
	        "styles.css",
	        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
	      ],
	      "scripts": [
	        "../node_modules/jquery/dist/jquery.slim.min.js",
	        "../node_modules/tether/dist/js/tether.min.js",
	        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
	      ],


45- Copiando los recursos a "assets"
  imagenes
  	/var/www/html/angular_udemy/seccion4/src/assets/img/*.png
  icono	(tuve q cambiar los permisos para q se viera)
  /var/www/html/angular_udemy/seccion4/src/favicon.ico

  
  navbar  (navbar)
  jumbotron (home)

  is: "inline style" -->para q no salga archivo de estilo (.css)
   ng g c componets/heroes -is

 46- RUTAS EN ANGULAR
 	Nos va a permitir navegar a diferentes paginas(diferentes componentes). Sin hacer refresh del navegador web

 	src/app/app.routes.ts

 	  con snniper saco la sintaxis basicas de routers escribiendo
 	  "ng2rou" y enter

 	//Aqui estamos definiendo las rutas "app.routes.ts"
		import { RouterModule, Routes } from '@angular/router';

		import { HomeComponent } from './components/home/home.component';
		const APP_ROUTES: Routes = [
		  { path: 'home', component: HomeComponent },

		  //esta es la ruta por defecto, que tomara sino coincide ninguna
		  { path: '**', pathMatch: 'full', redirectTo: '' }
		];

		export const app_routing = RouterModule.forRoot(APP_ROUTES);

	//Aqui le decimos a angular que disponga de esas rutas "app.module.ts"
		//rutas  "APP_ROUTING" es el nombre que exporta el fichero './app.routes'
		import { APP_ROUTING } from './app.routes';

		imports: [
			APP_ROUTING,
			...
		]	


		//si usas este sin hash, asegurarse de que en index.html aparezca esto   <base href="/">
		export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
		//useHash:true ->para el uso de parametros
		//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
		

 para hacer uso de las rutas
	<div class="container">
	  <router-outlet></router-outlet>
	</div>

47- Moviendonos por las rutas

sino estamos usando la navegacion HASH esto no va a funcionar
<a class="nav-link" href="#/home">Home</a>
puede ser que se cambie en un futuro la navegacion y lo de encima no funcionaria

vamos a usar elemento [routerLink]: que es un arreglo de parametros
	
	localhost:4200/home/pagina/1/3
	[routerLink]="['home','pagina','1','3']"

	<a class="nav-link" [routerLink]="['home','pagina','1','3']" >Home</a>

	sustituir href por [routerLink]

	  <li class="nav-item">
        	<a class="nav-link" [routerLink]="['home']" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['heroes']">Heroes</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" [routerLink]="['about']">About</a>
      </li>



routerLinkActive ="nombreClase que necesitamos cdo esta activo": Para que deje activo el elemento
en este caso la clase que necesitamos es "active"
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['about']">About</a>
      </li>      


nota: angular al encontrar un [routerLink] va a fijarse en el elemento padre superior si tiene un routerLinkActive,
     y en caso de que lo tenga podra las clases que este tiene cdo se active el elemento


48- Diseño del componente "Heroes"     

  cards
  https://v4-alpha.getbootstrap.com/components/card/


  

49- Servicios

		vamos a trabajar desde un servicio, porq cdo trabajemos a traves de api, todo deberia ser gestionado a traves de un servicio, porq es lo más práctico


		crearemos un servicio "heroe", q será encargado de mostrar o manejar la información referente a los heroes de nuestra APP
		Caracteristica de los servicios:
		 - Brindar información a quien lo necesite
		 - Realizar peticiones CRUD (crear, leer, actualizar, eliminar)
		 - Mantener la data de forma persistente ( datos listo siempre, para q los clientes entren y obtengan la informacion. Por ejemplo para hacer peticiones por http)
		 - Servir como recurso re-utilizable para nuestra APP(varios puedan acceder a la misma data)

50- Creando nuestro 1er servicio.
  src/app/servicios
    src/app/servicios/heroes.service.ts

     con snniper saco la sintaxis basicas de servicios
 	  "ng2servi" y enter

 	  //Injectable es un decorador de nuestra clase que lo importamos desde el core de angular

 	  1- Creo o Defino el servicio "heroes.service.ts"
 	     import { Injectable } from '@angular/core';

			//Injectable es un decorador de nuestra clase que lo importamos desde el core de angular
			@Injectable()
			export class HeroesService {

			  constructor() {
			    console.log('servicios listo para usar!!!');
			  }
			}

		2- Le digo a angular q disponga de ese servicio "app.module.ts"
		 //servicios
			import { HeroesService } from './servicios/heroes.service';	

			  providers: [ //providers=services
			    HeroesService
  			  ],

  		3- Usar el servicio
  		   -voy al componente en este caso "heroes.components.ts"	  
  		     - importo el servicio
	  		     import { HeroesService } from '../../servicios/heroes.service';	

	  		 - lo paso como parametro al constructor
	  		    constructor(private _miservicio:HeroesService) { 

  				}    

  		nota: cuando termino aqui inmediatamente dispara el constructor de servicio
  		




  ngOnInit() { //se usa para cargar cdo toda la pagina esta renderizada, es decir cdo esta listo el DOM
  }



interfaz(min 9)


51- Diseño heroe con *ngfor
//ciclo  *ngFor="let heroe of misHeroes; let i = index"
	<div class="card" *ngFor="let heroe of misHeroes; let i = index">

Angular interpreta por igual
[src]="heroe.img" o src="{{heroe.img}}"

<img class="card-img-top img-fluid" [src]="heroe.img" [alt|||||||||]="heroe.nombre">  				

52- Rutas con parametros


		//crear un componente q nos sirva para mostrar los detalles de cada heroe
		 ng g c componets/heroe

		//router definir q espera un parametro
			import { HeroeComponent } from './components/heroe/heroe.component';
			{path:'heroe/:id',component:HeroeComponent },

		//componente de Heroes en su HTML
		   <a class="nav-link" [routerLink]="['/heroe',i]">Heroes</a>



		para usar un boton y redireccionar con parametros

		  heroes.component.html
		      <button  (click)="verHeroe(i)"
		        type="button" class="btn btn-outline-primary btn-block">
		        ver más..
		      </button>


		  heroes.component.ts
			  import { Router } from '@angular/router';

			  constructor(private _miservicio:HeroesService,
			              private ruta:Router
			                ) {
			    //this.heroes = _miservicio.getHeroes();
			  }

			   verHeroe(idx:number){
			    //console.log(idx);
			    this.ruta.navigate(['/heroe',idx]);
			  }


53- Recibiendo parametros
   
   en este caso vamos a recibir un parametro del URL

   primero importamos el paquete "ActivatedRoute"
     import { ActivatedRoute } from '@angular/router';

   luego lo recibimos en el constructor  
