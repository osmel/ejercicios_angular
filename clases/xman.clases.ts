/*export: para indicar que esta clase se va a exportar*/
export class Xman {
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

export class Hija {
	
}