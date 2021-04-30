// Arreglos / Listas

var myArray = [1, 2, 3]

console.log(myArray[0])

/* Ejercicio 1
    1.- Crar un arreglo con 10 elementos de tipo dato
    2.- Imprimir lo que arrojaría ese arreglo en cierte posición
*/

console.log(`
Creando Listas e imprimiendo posiciones específicas.
`)

var myArray1 = ["Luis", "Ramon", "Francisco", "Pilar", "Jocelyn", "Josue", "Hector", "Alicia", "Maria", "Fernando"]

console.log(myArray1[5]) // Josue

var myArray2 = ["Correr", "Nadar", "Caminar", "Pesas", "Tenis", "Golf", "Polo", "Equitación", "Americano", "Football"]

console.log(myArray2[7]) // Equitación

var myArray3 = ["uno", "tres", "cinco", "siete", "doce", "quince", "veinte", "cien", "mil", "cero"]

console.log(myArray3[0]) // uno

var myArray4 = ["amarillo", "rojo", "azul", "morado", "verde", "gris", "cafe", "cian", "neggro", "rosa"]

console.log(myArray4[3]) // morado

var myArray5 = ["leon", "tigre", "pajaro", "aguila", "elefante", "venado", "conejo", "bufalo", "halcon", "cocodrilo"]

console.log(myArray5[8]) // halcon

// Para contabilizar los elementos de un Array debemos usar lo siguiente

console.log(myArray5.length)

// Como contabilizar los elementos de un Array con un For

for (var x = 0; x < myArray5.length; x++){
    console.log(`En este momento el indice es: ${x} y el valor es:`, myArray5[x])
}

/* Ejercicio 2
    1.- Crear un for que imprima cada elemento del arreglo
    2.- Que imprima del último elemento al primero
*/

console.log(`
Imprimiendo los elementos de un arreglo de forma invertida.
`)

for (var x = myArray5.length-1; x >= 0; x--){
    console.log(`En este momento el indice es: ${x} y el valor es:`, myArray5[x])
}

/* Ejercicio 4
    1.- Crear un arreglo nuevo cin números del 1 al 10
    2.- Multiplicar los números por ellos mismos es decir: 1 * 1 = 1
    2 * 2 = 4
    3 * 3 = 9
*/

console.log(`
Imprimiendo números por si mismos en un arreglo
`)

var numbersInput = [1,2,3,4,5,6,7,8,9,10]
var numbersOutput = multiplyNumbers(numbersInput)

function multiplyNumbers (numbers){
    var multipliedNumbers = []
    for(var i = 0; i < numbers.length; i++){
        multipliedNumbers.push(numbers[i]*numbers[i])
    }
    return multipliedNumbers
}

console.log(numbersInput)
console.log(numbersOutput)


/* Tarea
Ejercicio 1
    1.- Sobre el mismo arreglo numbersInput debe multiplicarse el ultimo número por el primero
    1*10=10
    2*9=18
    3*8=24
    4*7=28
    5*6=30
*/

console.log(`
Realizar Tarea 1 multiplicar posiciones de un arreglo, el primero por el ultimo y así consecutivamente
`)

var tareaSolution1 = tareaNumbers1(numbersInput)

function tareaNumbers1 (numbers){
    var multiplyNumbers = []
    var j = numbers.length-1
    for(var i = 0 ; i < numbers.length/2; i++, j--){
        multiplyNumbers.push(numbers[i]*(numbers[j]))
    }
    return multiplyNumbers
}

console.log(tareaSolution1)

/* Ejercicio 2
    1.- Sobre el mimso array multiplicar el numero del indice por cada uno
    1*1
    1*2
    1*3
    .....
    2*1
    2*2
    2*3
    
    3*1
    3*2
    3*3
    ......
    Hasta llegar al 10*10
*/

console.log(`
Realizar Tarea tablas de multiplicacion
`)

var tareaSolution2 = tareaNumbers2(numbersInput)

function tareaNumbers2 (numbers){
    var multiplyNumbers = []
    for(let i = 0 ; i < numbers.length; i++){
        for (let j = 0; j < numbers.length; j++){
            multiplyNumbers.push(numbers[i]*numbers[j]);
        }
    }
    return multiplyNumbers
}

console.log(tareaSolution2)


console.log(`
Imprimiendo con datos agregando texto por ejemplo: 1 x 1 = 1
`)

var tareaSolution3 = tareaNumbers3(numbersInput)

function tareaNumbers3 (numbers){
    var multiplyNumbers = []
    for(let i = 0 ; i < numbers.length; i++){
        for (let j = 0; j < numbers.length; j++){
            console.log(`${numbers[i]} x ${numbers[j]} = ${numbers[i]*numbers[j]}`)
        }
    }
    return multiplyNumbers
}

