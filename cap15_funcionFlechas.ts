//funcion normal
let mifuncion1 = function (a) {
	return a;	
}

/*
	 funcion flecha indica: 
	  espera un parametro a 
	  retorna un parametro a
*/
let mifuncionF1 = (a) => a;


////////////////////////////

let mifuncion2 = function (a:number, b:number) {
	return a+b;	
}

let mifuncionF2 = (a:number, b:number) => a+b;


////////////////////////////
let mifuncion3 = function (nombre:string) {
	nombre = nombre.toUpperCase();
	return nombre;
}

let mifuncionF3 = (nombre:string) => {
	nombre = nombre.toUpperCase();
	return nombre;
}


////////////////////////////
/*
  Para q sirve la funcion de flecha
    Los objetos que tienen funciones dentro se pueden definir de esta forma
*/

let objeto = {
			 nombre: "osmel",
	funcionObjeto1 : function (nombre:string) {
		return nombre;
	}
}

/*
      Ahora se definen las funciones dentro de los objetos de esta forma:
*/

let objetoNuevo = {
			   nombre: "osmel",
	funcionObjetoNew1(valor:string) {
		console.log(this.nombre+" "+valor );
	}
}

objetoNuevo.funcionObjetoNew1("calderon"); //-> osmel calderon



/*
      pasamos un setTimeOut
      	parametros: 
      		- funcion
      		-tiempo en segundo 1500->1segundo y medio
*/
let objetoNuevo = {
			   nombre: "osmel",
	funcionObjetoNew1(valor:string) {
		setTimeOut(function() {
			console.log(this.nombre+" "+valor ); //-> undefined calderon. Porq el this esta apuntando al scope de setTimeOut
		},1500);
		
	}
}

objetoNuevo.funcionObjetoNew1("calderon"); //-> undefined calderon


/*
	aqui el this apunta al global
*/
let nombre= "DUVI ALEX Fidel"
let objetoNuevo = {
			   nombre: "osmel",
	funcionObjetoNew1(valor:string) {
		setTimeOut(function() {
			console.log(this.nombre+" "+valor ); //-> DUVI ALEX Fidel calderon. Porq el this esta apuntando al scope global de todo el js
		},1500);
		
	}
}

objetoNuevo.funcionObjetoNew1("calderon"); //->DUVI ALEX Fidel calderon



/*
	 Para q sirve la funcion de flecha

	El this no es afectado cdo se ejecuta dentro de otra funcion.  Apunta exactamente al objeto. 
*/

let objetoNuevo = {
			   nombre: "osmel",
	funcionObjetoNew1(valor:string) {
		setTimeOut( () => console.log(this.nombre+" "+valor ),1500);
	}
}

objetoNuevo.funcionObjetoNew1("calderon"); //-> osmel calderon


/*

 Nota las funciones de flechas tienen otras cosas importante que es necesario estudiar, aunque esto sirve para este curso
*/

		