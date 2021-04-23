// Objetos


var myObject = {
    firstName: "Luis",
    lastName: "Dominguez Aldana",
    age: 33,
}

// Para imprimir una propiedad en específico de un Objeto

console.log(myObject.firstName)
console.log(myObject['lastName'])

// Se pueden colocar propiedades con caracteres especiales dentro de ' ' solo se podra imprimir usando el siguiente comando = console.log(myObject2[])

var myObject2 = {
    firstName: "Luis",
    lastName: "Dominguez Aldana",
    age: 33,
    'my age': 33
}

console.log(myObject2['my age'])

// Cambiar el valor de la propiedad de un objeto

myObject.firstName = "Pilar"

console.log(myObject.firstName)

// Agregar una propiedad a un objeto

myObject.hobbies = "Running"

console.log(myObject)

//Se puede eliminar una propiedad con la palabra reservada delete

delete myObject2['my age']

console.log(myObject)

// Se pueden agregar arreglos y objetos dentro de un objeto.

/* Ejercicio 1
    1.- Crear un objeto con información personal, (nombre, apellido, año de nacimiento).
    2.- Reemplazar el valor de una propiedad del objeto.
    3.- Crear una propiedad no existente.
    4.- Imprimir la propiedad creada e imprimir la propiedad con el valor reemplazado.
    5.- imprimir el objeto final
*/

console.log(`
Ejercicio 1.- creando objetos, agregando propiedades y cambiando propiedades
`)

var myPersonalInfo = {
    firstName: "Luis", 
    lastName: "Dominguez Aldana",
    birthYear: 1987
}

myPersonalInfo.firstName = "Jonathan"
myPersonalInfo.hobbie = "Gaming"

console.log(myPersonalInfo.firstName)
console.log(myPersonalInfo.hobbie)
console.log(myPersonalInfo)


