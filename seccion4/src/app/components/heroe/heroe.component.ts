import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
//ActivatedRoute

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any={};
  constructor(private rutaActiva: ActivatedRoute,
              private _heroeServicio:HeroesService
  ) {
      /*
      necesitamos escuchar los cambios o lo que venga de estos parametros. Esto regresa un observador,
      es algo como una promesa, algo q esta pendiente de esos cambios. Para que esto funciones nosotros
      necesitamos suscribirnos a ese observador
      */
      this.rutaActiva.params.subscribe(parametro => {
        console.log(parametro); //esto va a regresar un objeto con todos los parametros en este caso id:0
        //tener presente que los parametros q regresan son los q declaramos en el router y con los mismos nombres que usamos en el router
        //puedo verlo así console.log(parametro.id); pero la forma adecuada es:
        console.log(parametro['id']); //es mas seguro
        this.heroe = this._heroeServicio.getheroe(parametro['id']);
      })
  }

  ngOnInit() {
  }

}
