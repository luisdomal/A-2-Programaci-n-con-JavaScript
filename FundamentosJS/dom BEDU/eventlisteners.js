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
let balloonSize = 10


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
})

small.addEventListener("mouseover", () =>{
    balloonSize -= 5
    console.log("llamando globo", balloonSize)
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${balloonSize}px`
})


/* Ejercio 3
    1.- Calcular el IMC de acuerdo a la altura y peso de una persona
    2.- Regresar el resultado y agregar un mensaje 
    3.- Integrar Clases e Instancias
    4.- Importar el archivo de functional programming para no tener que re-escribir
    5.- El resultado podría ser: 25.5 tienes sobre-peso.
*/
// Como sacar valores de los inputs


const height = document.getElementById("height")
const weight = document.getElementById("weight")
const resultIMC = document.getElementById("resultIMC")
let valueHeight = 0
let valueWeight = 0

height.addEventListener("input", (event) =>{
    valueHeight = Number(event.target.value)
    console.log("Event tiene esto ===>", typeof valueHeight)
    resultIMC.textContent = calculoIMC
})

weight.addEventListener("input", (event) =>{
    valueWeight = Number(event.target.value)
    console.log("Event tiene esto ===>", typeof valueWeight)
    resultIMC.textContent = calculoIMC
})

