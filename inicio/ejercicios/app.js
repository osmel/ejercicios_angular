/*Importa una clase desde un archivo externo
import {Xman, Hija} from "./clases/xman.clases"
import {Otra} from "./clases/otra.clases"
*/
import {Xman} from "./clases/xman.clases"

/* importar multiples clases desde un archivo q creo en clases
import { Xman, Hija, Otra} from "./clases/index"
*/

let miobjeto = new Xman("osmel",40);


console.log(miobjeto.imprimir() );
