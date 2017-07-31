/*
					Asyncrona. Algo asi como un AJAX
  Las promesas nos dan la posibilidad de ejecutar algun codigo, o alguna funcion cdo una tarea asyncrona es terminada

resolve: caso de exito
 reject: caso de fallo
 
 let promesa1 = new Promise( function(resolve, reject) ) {
 		**aqui adentro entonces llamamos a resolve o reject. Uno de los 2 porq lo q indica es como termino la promesa
 }

 promesa1.then( FuncionExito, FuncionFallo );

*/





 let promesa1 = new Promise( function(exito, fallo){
 		setTimeOut( () => {
 			 console.log("promesa terminada")
 			 //Si termina bien
 			 exito();  // En este caso estamos diciendo q la promesa terminará bien. Y por tanto llamará a la 1ra funcion
 			 //Si termina mal
 			 //fallo();  // En este caso estamos diciendo q la promesa terminará mal. Y por tanto llamará a la 2da funcion

 	    },1500);

 })

 promesa1.then( 
 		function(){ //FuncionExito
 				console.log("Todo termino bien");
 		},
 		
 		function(){ //FuncionFallo
 				console.error("Todo termino mal");
 		}
  );