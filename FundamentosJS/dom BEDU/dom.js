/* Ejercicio 1
    1.- Abrir distintas paginas web y acceder a los elementos HTML con las herramientas de desarrollador.
*/


// paragraphs es un arreglo de objetos 
var paragraphs = document.getElementsByTagName("h3") // array sin metodos de array
var paragraphs2 = document.querySelectorAll("p") // array con metodos de array

console.log("paragraphs ===>", paragraphs)
console.log("paragraphs ===>", paragraphs2)

/* Ejerciciio 2
    1- Cambiar el valor de cada uno de los elementos <p> usando javascript
    2.- Iterar sobre los elementos HTML y cambiar su valor
*/

for (let i = 0; i < paragraphs.length; i++){
    const element = paragraphs[i]
    element.innerText = `El contenido es: ${element.innerText} y se encuentra en la posición: ${i}`
}

// For Each no devuelve un arreglo, solo itera sobre todos los elemntos

paragraphs2.forEach((p,index) => {
    p.innerText = `El contenido es: ${p.innerText} y se encuentra en la posición ${index}`
})

// Creando elementos en HTML
//1.- Crear el elemento de HTML que deseao
const myNewParagraph = document.createElement("p")
//2.- Agregamos un nodo de texto y lo guardamos en una variable
const textParagraph = document.createTextNode("Hola Mundo")
//A myNewPargraph le estoy agregando el texto <p></p> agregale "Hola Mundo" adentro
//3.- Agregamos el texto a <p></p>
myNewParagraph.appendChild(textParagraph)
//4.- Agregamos a myNewParagraph => <body> <p> "Hola Mundo" </p> </body>
document.body.appendChild(myNewParagraph)

/*
Tarea
 1.- Crear un anchor (para los links) a partir de Js
 2.- El anchor debe dirigir a google.com
 3.- El anchor debe contener texto que diga "Buscar en Google"
 */

 const googleSearch = document.createElement("a")
 googleSearch.setAttribute("href", "https://www.google.com/");
 const googleSearchT = document.createTextNode("Buscar en Google")
 googleSearch.appendChild(googleSearchT)
 document.body.appendChild(googleSearch)


/*
Tarea 2
 1.- Crear una tabla con THEAD y TBODY usando JS
_________________________________
|_______________|_______________|
|_______________|_______________|
|_______________|_______________|
 2.- A la tabla vacia agreagr estilos y atributos que agreguen estilo a las celdas
 3.- Agregar dentro un div con ID"Container"
 */

document.write("<div id='container'>")
    document.write("<table border='2' bg>")
        document.write("<tr>") 
            document.write("<td>1</td>")
            document.write("<td>1</td>")
            document.write("<td>1</td>")
        document.write("</tr>")    
        document.write("<tr>")
            document.write("<td>1</td>")
            document.write("<td>1</td>")
            document.write("<td>1</td>")
        document.write("</tr>")
    document.write("</table>")
document.write("</div>")