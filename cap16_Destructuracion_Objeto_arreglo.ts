/* Destructuracion de los objetos*/

let objeto = {
	 nombre: "osmel",
	 edad : 20,
	 sexo : true
}

/* Antigua forma de asignar valores seria:*/
   let nombre = objeto.nombre;
   let edad = objeto.edad;
   let sexo = objeto.sexo;

/* Destructuracion para asignar valores de forma multiple:
	let {}  --> no importa el orden siempre q las nuevas propiedades tengan igual nombre
	ejemplo debajo equivale a lo de encima
	cuando usamos : en destructuracion significan alias no tipos
*/

let {nombre:miNombre, edad, sexo} = objeto;

console.log(miNombre, edad, sexo)


/* Destructuracion de los array*/

let arreglo:string[] = ["osmel", "duvi", "alex", "fidel"];

/* Es secuencial coincide con las posiciones */
let {uno, dos, tres, cuatro} = arreglo;


/* para solo referenciar uno, tenemos q dejar vacio a los otros */
let {, , tres, } = arreglo;  //aqui solo estamos referenciando a "Alex" ->3ra posicion

console.log(tres)
