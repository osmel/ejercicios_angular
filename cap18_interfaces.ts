/*
    Esto es algo q no existe en Javascript
*/

function enviarMision (xman:any) {
	 console.log("Enviando a:" + xman.nom2); //undefined porq no hay propiedad nom2
}

let objeto = {
	  nombre: "osmel",
	  edad: 40
}

enviarMision(objeto);

/*
	  
  Restringir a que el objeto q estan esperando por parametro, 
   esta obligado a que tenga ciertas propiedades y funciones
     (xman: {nombre:string} )   --> asi obligamos q la propiedad q espere a dentro sea obligatoria nombre
 		console.log("Enviando a:" + xman.nombre);  -->no puede poner otra porq en este caso esta obligando encima q ponga nombre
*/


function otro(xman: {nombre:string} ) {
	 console.log("Enviando a:" + xman.nombre); //no puede poner otra porq en este caso esta obligando encima q ponga nombre
}

otro(objeto);



/*
	Con lo de arriba no resolvi el problema, porq por ejemplo no puedo esperar a "Edad"  
		La solucion esta en la interfaz. Es muy util para este caso

		capitalizamos el interface --> es un standard

*/


interface MiInterfaz {
	  nombre: string,
	  edad: number
	
}

let objeto:MiInterfaz = {  //Ahora las variables no se pueden cambiar porq tienen q cumplir igual q la interfaz
	  nombre: "osmel",  
	  edad: 40
}

function miInterfaz(xman: MiInterfaz ) {
	 console.log("Enviando a:" + xman.nombre); 
}

otro(objeto);