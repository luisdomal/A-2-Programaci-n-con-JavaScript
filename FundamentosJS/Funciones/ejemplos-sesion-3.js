/* Ejercicio 1
Vamos a dar calcular la edad mediante una función que reciba el año de nacimiento.
*/

function calculateAge(birthYear){
    var age = 2020 - birthYear
    return age
}

var ageLuis = calculateAge(1987)

console.log (ageLuis)
    
/* Ejercicio 2
Ahora podemos llamar la misma función las veces que queramos sin necesidad de repetir las mismas líneas de código una y otra vez. Las funciones también pueden llamar a otras funciones.
*/

function yearsUntilRetirement (year, name){
    var age = calculateAge(year)
    var retirement = 65 - age
    console.log(name + "retires in " + retirement + " years.")
}

yearsUntilRetirement(1995, "Luis Dominguez Aldana")

/* Ejercicio 3
Creando una función con la instrucción switch
No es necesario incluir break en cada caso del switch porque return finaliza la función, el siguiente código no es ejecutado.
*/

var whatDoYouDo = function(job, name) {
    switch (job) {
      case "developer":
        return name + " develops cool apps."
      case "designer":
        return name + " designs awesome websites."
      default:
        return name + " does something else."
    }
  }
  
  console.log(whatDoYouDo("developer", "Luis Dominguez"))
  console.log(whatDoYouDo("designer", "Mauricio Gonzalez"))
  console.log(whatDoYouDo("retired", "xLaura Cabrera"))

/* Ejercicio 4
  Funciones Anonimas
*/

function logName() {
    var name = "John Doe";
    console.log(name);
  }
  
  logName(); // John Doe

  (function() {
    var name = "John Doe";
    console.log(name);
  })();

  (function(lastName) {
    var firstName = "John";
    console.log(firstName + ' ' + lastName);
  })('Doe');

  /* Reto 1
  Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent.
  */

  function power(base, exponent) {
    var result = 1;
    for(var i = 0; i < exponent; i++) {
      result *= base; // Same as: result = result * base;
    }
  
    return result;
  }
  console.log(power(4,4))

  /* Reto 2
  Completar la función getLargerInt la cual recibe dos números enteros. La función debe retornar el número mayor.
  */

  function getLergerInt(number1, number2) {
  if(number1 > number2) {
    return number1
  } else {
    return number2
  }
}

console.log(getLergerInt(5,10))

/* Reto 3
Completar la función fibonacciSequence la cuál recibe limit, un entero positivo que representa la cantidad de elementos de la serie que queremos.
*/

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(var i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }

  console.log(fibonacci(10))