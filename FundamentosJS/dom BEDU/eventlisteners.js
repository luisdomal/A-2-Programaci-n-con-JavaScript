// Event Listener

//Alert!
// document.getElementById("myTitle").addEventListener("click", () =>{
//     alert("Hola Mundo")
// })

//Promt
document.getElementById("myTitle").addEventListener("click", () =>{
    const nombre = prompt("Cual es tu nombre?")
    console.log("Nombre ===>", nombre)
})

/* Ejercio 1
    1.- Con even listeners hacer que el globo se vaya inflando
*/

const labelGlobo = document.getElementById("globo")
let balloonSize = +localStorage.getItem('balloonStorage')

// Siempre considerar establecer el tamaño de la fuente del css para inicializar con el valor guardado de lo contario toma el valor por default
labelGlobo.style.cssText = `font-size: ${balloonSize}px`


labelGlobo.addEventListener("click", () =>{
    // balloonSize = balloonSize + 5
    balloonSize += 5
    console.log("llamando globo", balloonSize)
    // labelGlobo.style.fontSize = balloonSize + "px"
    // labelGlobo.style.fontSize = `${balloonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${balloonSize}px`
})

/* Ejercio 2
    1.- Sobre un nuevo event listener
    2.- Escoger un nuevo mouse event y decrementar el tamaño de mi globo
*/


const big = document.getElementById("bigger")
const small = document.getElementById("smaller")

big.style.cssText = `font-size: 20px`
small.style.cssText = `font-size: 20px`

big.addEventListener("mouseover", () =>{
    balloonSize += 5
    console.log("llamando globo", balloonSize)
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${balloonSize}px`
    localStorage.setItem('balloonStorage',balloonSize)
})

small.addEventListener("mouseover", () =>{
    balloonSize -= 5
    console.log("llamando globo", balloonSize)
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${balloonSize}px`
    localStorage.setItem('balloonStorage',balloonSize)
})



/* Ejercio 3
    1.- Calcular el IMC de acuerdo a la altura y peso de una persona
    2.- Regresar el resultado y agregar un mensaje 
    3.- Integrar Clases e Instancias
    4.- Importar el archivo de functional programming para no tener que re-escribir
    5.- El resultado podría ser: 25.5 tienes sobre-peso.
*/
// Como sacar valores de los inputs

const name = document.getElementById("name")
const birthDate = document.getElementById("birthDate")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const resultIMC = document.getElementById("resultIMC")
let person = new Person3("", 2021, height, weight)

const mensajeIMC = (p) => {
    let IMC = p.IMC()
    if (IMC < 18.5)
        return `Hola ${p.name} tienes ${p.edad()} años de edad y tu IMC es de: ${IMC.toFixed(2)} tienes insuficiencia ponderal`
    if (IMC <= 24.9)
        return `Hola ${p.name} tienes ${p.edad()} años de edad y tu IMC es de: ${IMC.toFixed(2)} tienes intervalo normal`
    if (IMC <= 29.9)
        return `Hola ${p.name} tienes ${p.edad()} años de edad y tu IMC es de: ${IMC.toFixed(2)} tienes sobrepeso`
    if (IMC >= 30.0)
        return `Hola ${p.name} tienes ${p.edad()} años de edad y tu IMC es de: ${IMC.toFixed(2)} tienes obesidad`
}


name.addEventListener("input", (event) =>{
    person.name = event.target.value
    console.log("Event tiene esto ===>", typeof person.name)
})

birthDate.addEventListener("input", (event) =>{
    person.age = +event.target.value
    console.log("Event tiene esto ===>", typeof person.age)
})

height.addEventListener("input", (event) =>{
    person.height = Number(event.target.value)
    console.log("Event tiene esto ===>", typeof person.height)
    resultIMC.textContent = mensajeIMC(person)
})

weight.addEventListener("input", (event) =>{
    person.weight = Number(event.target.value)
    console.log("Event tiene esto ===>", typeof person.weight)
    resultIMC.textContent = mensajeIMC(person)
})

//Tomando datos de in input como un array

const arrayInput = document.getElementById("Array")
const arrayText = document.getElementById("resultArray")
arrayInput.addEventListener("input", (event) =>{
    // Convierte el event.target.value a un arreglo cuando los valores esten separados por ","
    const myArray = event.target.value.split(",")
    // Shorcut para convertir strings a numeros usando map
    // const convertArray = myArray.map(Number)
    const convertArray = myArray.map((num)=> Number(num))
    // Revisamos si no es array, mostramos un error en la etiqueta
    if(!Array.isArray(myArray) || myArray.length ===1){
        arrayText.textContent = "No es un array"
    }else{
    // Si es array entonces regresamos el resultado de la funcion
    arrayText.textContent = filterTarea(convertArray)
    }
})


/* Actividad localstorage

    1.- En el event listener de inflar globo, guardar en local storage si ya infló el globo
    2.- si al refrescar la pantalla el globo se había inflado, mantener el tamaño en el que estaba
*/



