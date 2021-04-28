// Programación orientada a objetos
// Paradigma: Es un modelo a seguir para resolver una problematica.


// Modelos de paradigmas
// Programación Imperativa
// Describe paso a paso un conjunto de instrucciones para solucionar un problema

// clase

class Person2 {
    constructor (name){
        this.name = name
    }

    saludo(){
        return `Hola me llamo ${this.name}`
    }
}

// new : crea una instancia de una clase // No usar Mayusculas a menos que sea una instancia de un objeto

const Luis = new Person2("Luis").saludo()

console.log(Luis)


// Programación Declarativa
// Esta basado en funciones

/* Ejercicio 1
    1.- Crear una clase Person
    2.- Vamos a crear un método que salude con nuestro nombre
    3.- Vamos a crear un metodo que diga que edad tenemos
*/

class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    saludo(){
        return `Hola mi nombre es ${this.name} y tengo ${this.age} años`
    }
}

const luisDom = new Person("Luis", 33).saludo()
console.log(luisDom)

// Se pueden hacer operaciones dentro de los metodos.
// Los getters solamente deben retornar información no deben cambiar el estado de la clase.
// Para que la funcion de fecha con string funcione debe estar en formato amerciano "mm/dd/aaaa"

// Clase Padre

class LivingBeing {
    constructor(height, weight){
        this.height = height
        this.weight = weight
    }

    calculoIMC (){
        return `Mi indice de masa corporal es ${this.weight / (this.height*this.height)}`
    }
}

// Clase Hijo

// class define y crea una clase. (Clase hija)
class Person3 extends LivingBeing {
    constructor(name, age, height, weight){
        // Solo cuando se extiende una clase debemos usar super
        super(height, weight)
        this.name = name,
        this.age = age
        this.counter = 0
        this.counterSaludo = 0
        this.counterEdad = 0
    }
    saludo(){
        this.counterSaludo++
        return `Hola mi nombre es ${this.name}`
    }
    edad(){
        this.counterEdad++
        const actualYear = new Date().getFullYear()
        const birthYear = new Date(this.age).getFullYear()
        return `Tengo ${actualYear - birthYear} años de edad`
    }
    // Incrementar el valor cada vez que se llame
    incrementarCounter(){
        this.counter++
    }
    // los getters solamente deben retornar información no deben cambiar el estado de su clase.
    get getCounter(){
        return this.counter
    }
    get getCounterSaludo(){
        return this.counterSaludo
    }
    get getCounterEdad(){
        return this.counterEdad
    }
    IMC(){
        // return super.saludoPadre()
        return super.calculoIMC()
    }
}

// new crea una instancia de una clase

const luisDomAl = new Person3("Luis","12/19/1987", 1.74, 69)
console.log(luisDomAl.saludo())
console.log(luisDomAl.edad())


luisDomAl.incrementarCounter()
luisDomAl.incrementarCounter()
luisDomAl.incrementarCounter()
luisDomAl.incrementarCounter()


console.log(luisDomAl.getCounter)

/* Ejercicio 2
    1.- Sobre la misma clase creada
    2.- Crear un Getter que devuelva la cantidad de veces que han mandado a ejecutar "saludar()"
    3.- Crear un Getter que tambien devuelva la cantidad de veces que han mandado ejecutar "edad()"
*/

console.log(luisDomAl.saludo())
console.log(luisDomAl.saludo())
console.log(luisDomAl.saludo())
console.log(luisDomAl.saludo())

console.log(luisDomAl.edad())
console.log(luisDomAl.edad())
console.log(luisDomAl.edad())


console.log(luisDomAl.getCounterSaludo)
console.log(luisDomAl.getCounterEdad)


// Imprimiendo 
console.log(luisDomAl.calculoIMC())


/* Tarea 
    1.- Crear una clase Padre
    2. Crear una clase Hijo
    3.- Ejecutar un metodo de la clase padre en la clase hija
    4.- Calcular la masa corporal en la clase padre y retornar el resultado.
*/

console.log(`
Imprimiendo el calculo de masa corporal del mentodo de la clase padre en la hija
`)
console.log(luisDomAl.IMC())