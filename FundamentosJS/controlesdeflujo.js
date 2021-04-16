//Con el ejemplo anterior podemos mostrar en consola una serie de números desde el 0 hasta el 50 utilizando el método console.log().

console.log("Mostrar los números consecutivos de 0 a 50")

for(var i = 0; i <= 50; i++) {
    console.log( i );
  }

//Para empezar debemos determinar si un número es par o impar, la mejor forma de hacerlo es usando el operador módulo, el cual nos da como resultado el residuo de una división. Si dividimos un número entero entre 2 y su residuo es igual a cero, entonces el número es par.

/*
var residuo = 10 % 2;
console.log( residuo ); // 0 | 10 es par
  
var residuo = 7 % 2;
console.log( residuo ); // 1 | 7 es impar
*/

//Mostrar en consola sólo los números impares menores que 50

console.log("Mostrar los números impares menores a 50")

for(var i = 0; i <= 50; i++) {
if( i % 2 !== 0 ) {
    console.log( i );
}
}

//Mostrar en consola sólo los números pares menores que 50

console.log("Mostrar los números pares menores a 50")

for(var i = 0; i <= 50; i++) {
if( i % 2 == 0 ) {
    console.log( i );
}
}

/*
Ejercicio
    1.- Hacer un switch que responde el color de ropa
    2.- Enviar color
    3.- Los cases tendran diferentes colores. Al menos 6 colores
    4.- Va a imprimirse el color de ropa
*/

var codigoColor = 1;
var color;

switch (codigoColor){
    case 1:
        color = "Rojo";
        break;
    case 2:
        color = "Negro";
        break;
    case 3:
        color = "Blanco";
        break;
    case 4:
        color = "Rosa";
        break;
    case 5:
        color = "Morado";
        break;
    case 6:
        color = "Verde";
        break;
    case 7:
        color ="Amarillo";
        break;
    case 8:
        color = "Azul";
        break;
    case 9:
        color = "Cafe";
        break;
    case 10:
        color = "Gris";
        break;
    default:
        color = "Codigo de color no existe";

}
console.log(color)