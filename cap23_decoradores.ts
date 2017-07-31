/*
Los decoradores son una caracteristica que esta todavia en experimento
los decoradores no son más q una funcion que reflejan al constructor
*/

function miConsola (constructor:Function) {
	console.log( constructor );
}

@miConsola  //aqui es donde asocia el decorador a la clase
 class Animal {
 		constructor (public nombre:string) {

 		}
 }


/*

como resultado devolverá:

  		function Animal(nombre) {
  		   this.nombre = nombre;
 		}


para q no salga un warning tendrias q ir al 
	compilar con:
	tsc --experimentalDecorators

  o ir al "tsconfig.json": y agregar esa caracteristica
  	"experimentalDecorators": true,

*/

