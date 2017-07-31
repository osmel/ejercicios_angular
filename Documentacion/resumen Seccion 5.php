¿Qué aprenderemos en esta sección?
Sección 5, clase 62
A continuación vamos a entrar a profundidad sobre el tema de los PIPES, que no es más que una transformación visual de la data.

En detalle veremos:

	Pipes uppercase y lowercase
	Pipe Slice
	Pice Decimal
	Pipe Percent
	Pipe Currency
	Pipe Json
	Pipe Async
	Pipe Date
	Pipes personalizados
	Capitalizar palabras y nombres
	Creación de un pipe, que permite cargar recursos externos de forma segura.
	Al final de la sección tendremos una tarea para afianzar los conocimientos creando un pipe personalizado que nos permitirá ocultar un texto a voluntad.

https://angular.io/guide/pipes
https://angular.io/api?status=stable&type=pipe


pipes(tuberías o filtros  | ): Son pequeñas funciones que nos sirven para realizar alguna tarea en nuestra vista o plantilla de Angular 2. Sirven para transformar la data de una manera visual. Pero el valor sigue siendo el mismo.

Vamos a definir una propiedad publica en nuestra clase del componente:
	texto="osmel calderon";
	public fecha = new Date(2012, 8, 17);
Y en la plantilla de este componente usaremos los filtros de esta forma:
	{{texto | uppercase}}	  --> OSMEL CALDERON
	{{  fecha | date:'fullDate' | uppercase}}  -->MONDAY, SEPTEMBER 17, 2012	

Primero tenemos el dato a transformar que en este caso sería la propiedad fecha, después con una tubería usamos el pipe date y le pasamos un parámetro que en este caso sería fullDate y luego encadenamos otra pipe para convertir el texto a mayúsculas.
Esto nos imprimirá lo siguiente: MONDAY, SEPTEMBER 17, 2012	


http://voidcanvas.com/angular-2-pipes-filters/






 
  
  
 
*LowerCasePipe (Transforma a Minuscula)
	import { LowerCasePipe } from '@angular/common';

*UpperCasePipe(Transforma a Mayuscula) 
   import { UpperCasePipe } from '@angular/common'; 
 
*SlicePipe (Cortar o eliminar subcadenas
			Crea nueva cadena o lista con un subconjunto de elemento) 

    import { SlicePipe } from '@angular/common';
 
 
*TitleCasePipe(Capitaliza Letra)
  import { TitleCasePipe } from '@angular/common';


*DatePipe  
   import { DatePipe } from '@angular/common';
   https://angular.io/api/common/DatePipe


* DecimalPipe  
  import { DecimalPipe } from '@angular/common';
  number_expression | number[:digitInfo]

  digitInfo es una cadena que tiene el siguiente formato:
	{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}

	minIntegerDigits: mínimo número de dígitos enteros a utilizar. El valor predeterminado es 1.
	minFractionDigits mínimo número de dígitos después de la fracción. El valor predeterminado es 0.
	maxFractionDigits máximo número de dígitos después de la fracción. El valor predeterminado es 3.



* PercentPipe (Formatea un número como un porcentaje %) 
   import { PercentPipe } from '@angular/common';
   	number_expression | percent[:digitInfo]
   	{{b | percent:'4.3-5'}}

* CurrencyPipe (formatear número como moneda) 
    import { CurrencyPipe } from '@angular/common';

    number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]

    

	currencyCode: Es el codigo USD, EUR
	symbolDisplay(boolean): Indica si se usa simbolo o codigo
		true: Usa simbolo. Ejemplo $
		false:(default): Usa codigo (Ejemplo USD).
	digitInfo: formato {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}

	WARNING: this pipe uses the Internationalization API which is not yet available in all browsers and may require a polyfill. See Browser Support for details.


*JsonPipe (Convierte el valor en una cadena JSON. Si lo pones entre etiquetas <pre>, se verá mejor formateado)
	import { JsonPipe } from '@angular/common';

	object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

	 <pre>{{object | json}}</pre>


AsyncPipe: (Desenvuelve un valor desde una primitiva asíncrona.)
import { AsyncPipe } from '@angular/common';

Resumen

https://medium.com/@alebrozzo/mi-empresa-me-pidi%C3%B3-una-presentaci%C3%B3n-general-sobre-angular-2-esto-es-lo-que-arm%C3%A9-b04eeacc3164


Comenzamos el 71