var a = 5;
var b = 10;
var c = 15;
var d = 20;
var e = "5";
var f = "Hola Mundo"
var g = null
var h = {}

/*
console.log(a+b*c)
console.log((a+b)*c)
console.log(b/a*c)
console.log(b/(a*c))
console.log(a-b+c)
console.log(a-(b+c))
*/

/*
 Ejerciio 1
    1.- Declarar 4 variables
    2.- Hacer 2 operaciones con cada uno de los operadores
*/
console.log("Ejercicio 1")
//Suma
console.log(a+b)
console.log(a+d)
//Resta
console.log(c-d)
console.log(d-a)
//Multiplicación
console.log(a*c)
console.log(d*b)
// División
console.log(d/a)
console.log(c/a)
// Modulo
console.log(d%a)
console.log(d%b)
//Incremento
d++
console.log(d)
d++
console.log(d)
//Decremento
c--
console.log(c)
c--
console.log(c)
/*
Ejercicio 2
    1.- Crear condiciones if para cada operador lógico
    2.- Crear 3 condiciones if para elementos truthy y false
*/
//1.-
console.log("Condiciones usando operadores")
console.log("Igualdad")
if(a==b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Desigualdad")
if(a!=b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Estrictamente Iguales")
if(a===b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Esctrictamente Desiguales")
if(a!==b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Mayor que")
if(a>b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Mayor o igual que")
if(a>=b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Menor que")
if(a<b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
console.log("Menor o igual que")
if(a<=b){
    console.log("La condición es verdadera")
}else{
    console.log("La condición es falsa")
}
//2.-
console.log("Truthy y Falsey")
if(h){
    console.log("Truthy")
}else{
    console.log("Falsey")
}
if(a==e){
    console.log("Truthy")
}else{
    console.log("Falsey")
}
if(a){
    console.log("Truthy")
}else{
    console.log("Falsey")
}
if(a===e){
    console.log("Truthy")
}else{
    console.log("Falsey")
}
if(g){
    console.log("Truthy")
}else{
    console.log("Falsey")
}
if(a===e){
    console.log("Truthy")
}else{
    console.log("Falsey")
}

// Condiciones ternarias 
// La condición regular la podemos representar de la siguiente manera

if (a === a){
    console.log(1)
}else{
    console.log(2)
}

// Condicion terminaria se puede representar de la siguiente manera

a === a ? 1 : 0
















