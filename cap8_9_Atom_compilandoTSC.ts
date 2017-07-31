/*
 cap 8-9
  Convertir mi codigo TS en JS
  tsc proyecto.ts     --> genera un archivo js (codigo JS valido y depurado en tiempo de escritura)
  tsc proyecto.ts -w --> Ponerlo en modo observador. Que Typescript este pendiente de cualquier cambio.
  						 Detecte los cambios cdo se guarde y haga compilacion en modo automatico.
  						 Solo pone este archivo a observar

  tsc -init  		-->	Inicializar un proyecto de tipo TS.
  						Se crea el archivo "tsconfig.json"-->nos permite configurar o establecer reglas para nuestro compilador de TS
  						   tiene una estructura json, con las reglas que podemos indicarle a ts. que debe hacer en cada momento
  						   	* module --> que tipo de portador de modulo vamos a trabajar "commonjs"
  						   	* target  --> a que version de JS quiero compilar en este caso "es5", version standard y soportada por mayoria de navegadores. Podemos compilarla a la que queramos "es6", "es7", etc
  						   	* noImplicityAny-
  						   	* Sourcemap-> ṕara generar archivos que nos van a permitir la depuracion

  tsc    --> Guardar y luego ejecutar tsc, y este va a ejecutar todos los cambios, y va a buscar el compilador 
  				consultando el archivo "tsconfig.json". Sino paso cerramos atom y volvemos abrirlo




*/
function saludar(nombre:string) {
	 console.log("hola"+nombre);
}

var objeto = {
	  nombre:"osmel"
}

saludar(objeto.nombre);