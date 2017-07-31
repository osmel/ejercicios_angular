class Personas {
	nombre:string ="osmel";
	edad:number =30;
	sexo:boolean =true;
	constructor (nombre:string, edad:number, sexo:boolean =true;) {
	 /*this: siempre va a ser referencia a la clase*/
	  this.nombre= nombre;
	  this.edad= edad;
	  this.sexo= sexo;
	}
}

let miObjeto:Personas = new Personas("duvi alex fidel", 40, true);
console.log(miObjeto);




export class Xmen {
	nombre:string ="osmel";
	edad:number =30;
	
	constructor (nombre:string, edad:number) {
	  this.nombre= nombre;
	  this.edad= edad;
	}
	imprimir() {
	  console.log (` ${this.nombre} - ${this.edad} `);
	};
}


