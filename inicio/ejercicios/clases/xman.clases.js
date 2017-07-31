"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*export: para indicar que esta clase se va a exportar*/
var Xman = (function () {
    function Xman(nombre, edad) {
        this.nombre = "osmel";
        this.edad = 30;
        this.nombre = nombre;
        this.edad = edad;
    }
    Xman.prototype.imprimir = function () {
        console.log(" " + this.nombre + " - " + this.edad + " ");
    };
    ;
    return Xman;
}());
exports.Xman = Xman;
var Hija = (function () {
    function Hija() {
    }
    return Hija;
}());
exports.Hija = Hija;
