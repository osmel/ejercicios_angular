import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre ="Fernando";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a=0.234;
  salario=1234.5;

  objeto:Object  = {
      foo: "bar",
      baz: "qux",
      edad: 500,
      nested: {
        xyz: "3",
        numbers: "[1, 2, 3, 4, 5]"
      }
  };

}
