var time2 = 13;
var time = 0;
var greeting;

//Condicional If
if (time < 12) {
  greeting = "Good morning";
}
if (time < 20) {
  greeting = "Good afternoon";
}
if (time >= 20) {
  greeting = "Good evening";
}
console.log(greeting) // Good afternoon
//Condicional If y Else If
if (time2 < 12) {
    greeting = "Good morning";
  } else if (time2 < 20) {
    greeting = "Good afternoon";
  } else if (time2 >= 20) {
    greeting = "Good evening";
  } 
  console.log(greeting) // Good afternoon
//Switch y Break
var day = 4;
var text;
switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";
}
console.log(text);
// Ciclo For
for(var i = 0; i<=200; i++){
    console.log("Hello World");
  }
/*Reto 1 
Utilizando lo visto hasta el momento sobre operadores lógicos y condicionales, debes crear un nuevo mensaje que será usado cuando time sea una hora que no existe en el día.
*/
if (time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
} else {
  greeting = "Unknown hour";
}
console.log(greeting)
/*Reto 2
Crear un ciclo desde 0 hasta 100.
Mostrar todos los números pares en este ciclo con console.log()
*/
for(var i = 0; i <= 100; i++) {
    if( i % 2 === 0 ) {
        console.log( i );
    }
}
/*Reto 3
Crear un ciclo desde 0 hasta 100.
Mostrar todos los números impares en este ciclo con console.log()
*/
for(var i=0; i<=100; i++){
    if(i%2 !== 0){
        console.log( i);
    }
}

