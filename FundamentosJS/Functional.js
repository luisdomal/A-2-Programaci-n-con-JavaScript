// Functional Programming

// Inmutabilidad. Es no cambiar los valores externos.
// No se deben o no se deberían modificar los datos de las variables (mutar)


var arrayNumbers = [1,2,3]

console.log("before multiplicar ===>", arrayNumbers)

const multiplicar = (numbers) => {
    for (var i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i]*2
    }
}

multiplicar(arrayNumbers)
console.log("after multiplicar ===>", arrayNumbers)

// // Funciones Puras
// La funcion recibe un parametro, que nunca que se modifica
// La funcion devuelve un valor
// No usa this
// No utiliza variables globales

const multiply = (num) => {
    return num += 2
}

console.log(multiply(2))
console.log(multiply(2))
console.log(multiply(2))


/* Ejercicio 1
    1.- En una funcion pura devolver la multiplicación de [1,5,6] en un nuevo array sin modificar el input
    2.- En otra funcion devolcer la suma de un número sin alterar el input original
*/

console.log(`
Multiplicando 2 a cada indice de un arreglo sin alterar la variable original
`)

var input = [1,5,6]
var output1 = multiplyInput(input)

function multiplyInput (numbers) {
    var multipliedInput = []
    for (i=0; i<numbers.length;i++){
        multipliedInput.push(numbers[i]*2)
    }
    return multipliedInput
}

console.log(input)
console.log(output1)

console.log(`
Sumando 2 a cada indice de un arreglo sin alterar la variable original
`)

var output2 = sumInput(input)

function sumInput (numbers) {
    var addingInput = []
    for (i=0; i<numbers.length;i++){
        addingInput.push(numbers[i]+2)
    }
    return addingInput
}

console.log(input)
console.log(output2)


/* Ejercicio 2
    1.- Asignar elementos a un objeto sin alterar el objeto original
*/ 

console.log(`
Agregando elementos a un objeto sin alterar el objeto original con el elemento Assing "Object.assign({}, obj)"
`)

const myObject = {
    name: "Luis"
}

const setProp = (obj) => {
    const myNewObj = Object.assign({}, obj) 
    myNewObj.hobbies = ["Read", "Walk"]
    return myNewObj
}

console.log("Before setProp ===>", myObject)

const  myNewObj = setProp (myObject)

console.log("After setProp ===>", myObject)
console.log("After setProp ===>", myNewObj)

// Tambien se puede hacer con spread {... obj}

console.log(`
Agregando elementos a un objeto sin alterar el objeto original con el elemento spread "{...obj}"
`)

const myObject2 = {
    name: "Alejandra"
}

const setProp2 = (obj) => {
    const myNewObj2 = {...obj} 
    myNewObj2.hobbies = ["Gaming", "Run"]
    return myNewObj2
}

console.log("Before setProp ===>", myObject2)

const  myNewObj2 = setProp2 (myObject2)

console.log("After setProp ===>", myObject2)
console.log("After setProp ===>", myNewObj2)


// Funciones de Orden Superior

// map: Regresa un nuevo arreglo despues de que una función ha sido aplicada a cada uno de sus elementos, suple a 

console.log(`
Aplicando map
`)

const mapMultiply = (array) =>{
    const resultArray = array.map((numero) =>{
        return numero *2
    })
    return resultArray
}

const myOriginalArray = [1,2,3]

console.log("Before function Result ===>", myOriginalArray)

const result = mapMultiply(myOriginalArray)

console.log("After function Result ===>", myOriginalArray)
console.log("After function Result ===>", result)

// filter: busca y evalua cierta condición dando como resultado un array más pequeño o igual 

console.log(`
Aplicando filter
`)

const filterNumber = (array) =>{
    const resultArray = array.filter((numero) => {
        if (numero % 2 === 0) {
            return numero
        }
    })
    return resultArray
}

const resultFiler = filterNumber(myOriginalArray)

console.log("After function Result ===>", myOriginalArray)
console.log("After function Result ===>", resultFiler)

// reduce: aplica una función a un acumulador y a cada valor de su arreglo, su objetivo es reducirlo a un único valor y retornarlo

console.log(`
Aplicando reduce
`)

const reduceNumber = (array) =>{
    const resultSum = array.reduce((acumulador, valorActual) => {
        //1ra vez acumulador tiene 0 y valorActual tiene 1
        //return acumulador = 0 + 1
        //2da vez acumulador tiene 1 y valor Actual tiene 2
        //return acumulador = 1 + 2 = 3
        //3ra vez acumulador tiene 2 y valor Actual tiene 3
        // return acumulador = 3 + 3 = 6
        return acumulador = acumulador + valorActual
        }, 0)
        return resultSum 
}

const resultReduced = reduceNumber(myOriginalArray)

console.log("After function Result ===>", myOriginalArray)
console.log("After function Result ===>", resultReduced)

/* Tarea
    Ejemplo de arreglo: [15, 500, 95, 87, 34, 76]
    1.- Crear una funcion que retorne un arreglo iterado por un map que devulva el número al cuadrado
    2.- Crear una funcion que retorne los números impares de la respuesta de la funcion anterior 
    3.- Crear una funcion que sume los números impares y devuelva la raíz cuadrada del resultado
*/

const tareaFunctionalProg = [15, 500, 95, 87, 34, 76]

const mapTarea = (array) =>{
    const resultArray = array.map((numero) =>{
        return numero * numero
    })
    return resultArray
}

const mapTareaResult = mapTarea(tareaFunctionalProg)

console.log(`
Tarea Functional Programming aplicando map, filter y reduce
`)

console.log(`La respuesta de los números al cuadrado es ===>`, mapTareaResult)

const filterTarea = (array) =>{
    const resultArray = array.filter((numero) => {
        if (numero % 2 === 1) {
            return numero
        }
    })
    return resultArray
}

const filterTareaResult = filterTarea(mapTareaResult)

console.log(`Los números impares son ===>`, filterTareaResult)

const reduceTarea = (array) =>{
    const resultSumRoot = array.reduce((acumulador, valorActual) => {
        return acumulador = acumulador + valorActual
        }, 0)
        return Math.sqrt(resultSumRoot)
}

const reduceTareaResult = reduceTarea(filterTareaResult)

console.log(`La suma de los números impares y su raíz cuadrada es ===>`, reduceTareaResult)

