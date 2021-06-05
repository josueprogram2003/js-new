import  saludar,{Saludar , PI} from "./constantes.js";

// AS SON ALIAS COMO EN BASE DE DATOS
import{aritmetica as a} from "./aritmetica.js"

console.log("ARCHIVO MODULOS.JS");

console.log(PI);
console.log(a.sumar(2,3));
console.log(a.restar(3,1));
saludar();

let saludo = new Saludar();
saludo;
