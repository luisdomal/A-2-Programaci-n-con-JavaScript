// Simplifican el código
// Repiten acciones/sentencias/tasks
// Siempre retornan un resultado

function addNumbers(a, b){
    return a + b
}

var result = addNumbers(5, 8)

console.log(result)

// ==========>

function congelar (alimento){
    return "Congelando " + alimento
}

var polloCongelado = congelar("Pollo Congelado")

console.log(polloCongelado)

/* Ejercicio 1
    1.- Saludar a 3 personas distintas usando una funcion
    2.- La funcion deberá recibir un parámetro de tipo Strin
    3.- Hacer el console.log de los saludos fuera de la funcion
*/

console.log(`
Aplicando funciones para enviar un saludo.
`)

function greetings (saludo){
    return "Hola buenos días "+saludo
}

var saludoLuis = greetings("Luis")
var saludoMauricio = greetings("Mauricio")
var saludoRamon = greetings("Ramon")

console.log(saludoLuis)
console.log(saludoMauricio)
console.log(saludoRamon)

/* Ejercicio 2
    1.- Crear una funcion que retorne la edad de las personas mandando el año de nacimiento
    2.- La funcion debe retornar la edad sin contar los meses y días
*/

console.log(`
Aplicando funciones para determinar la edad
`)

function calculateAge (birthYear){
    var currentYear = new Date().getFullYear()
    return "Tienes " + (currentYear - birthYear) + " Años"
}
var ageLuis = calculateAge(1987)
console.log(ageLuis)

/* Ejercicio 3
    1.- Hacer una funcion que reciba 2 parametros y devuelva el número mayor
    2.- La función debereá retornar un valor de tipo Number
*/

console.log(`
Funciones con If y Else para retornar númeor mayor o menor que
`)

function getMax (valor1, valor2){
    if (valor1 > valor2) {
        return `${valor1} es mayor a ${valor2}`
    }else{
        return `${valor2} es mayor a ${valor1}`
    }
}

var maxEj1 = getMax(100, 101)
var maxEj2 = getMax(300, 101)
var maxEj3 = getMax(-6, 0)
var maxEj4 = getMax(-600, -765)

console.log(maxEj1)
console.log(maxEj2)
console.log(maxEj3)
console.log(maxEj4)

/* EcmaScript 6
    // const
    // let
    // ` ` backtips
    // arrow functions
*/

// Arrow Functions siempre que tengamos salto de línea tenemos que usar llaves y return

console.log(`
Arrow Functions
`)

const getMaxArrow = (valor1, valor2) => {
    return valor1 > valor2
        ? `${valor1} es mayor a ${valor2}` 
        : `${valor2} es mayor a ${valor1}`
}

console.log(getMaxArrow (1,2))

const getMaxArrow2 = (valor1, valor2) => valor1 > valor2 ? `${valor1} es mayor a ${valor2}` : `${valor2} es mayor a ${valor1}`

console.log(getMaxArrow2 (4,6))

/* Ejercicio 4
    1.- Utilizar arrow function en todas las funciones
    2.- Reemplazar las 3 funciones que ya tenemos a arrow functions
*/

console.log(`
Aplicando las funciones con Arrow Functions
`)

const greetingsArrow = (saludo) => `Hola buenos días ${saludo}`

var saludoArrow1 = greetingsArrow("Luis")
var saludoArrow2 = greetingsArrow("Arely")
var saludoArrow3 = greetingsArrow("Ramon")

console.log(saludoArrow1)
console.log(saludoArrow2)
console.log(saludoArrow3)

//_____________________________________________________________________//
const calculateAgeArrow = (birthYear) => {
    var currentYear = new Date().getFullYear()
    return `Tienes ${currentYear-birthYear} Años`
}

var ageArrowLuis = calculateAgeArrow (1987)

console.log(ageArrowLuis)

//_____________________________________________________________________//
const getMaxArrowFine = (valor1, valor2) => valor1 > valor2 ? `${valor1} es mayor a ${valor2}` : `${valor2} es mayor a ${valor1}`

var getMaxArrowFine1 = getMaxArrowFine(100, 101)
var getMaxArrowFine2 = getMaxArrowFine(300, 101)
var getMaxArrowFine3 = getMaxArrowFine(-6, 0)
var getMaxArrowFine4 = getMaxArrowFine(-600, -765)

console.log(getMaxArrowFine1)
console.log(getMaxArrowFine2)
console.log(getMaxArrowFine3)
console.log(getMaxArrowFine4)