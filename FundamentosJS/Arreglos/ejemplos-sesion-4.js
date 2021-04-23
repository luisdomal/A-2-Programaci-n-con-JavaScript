/* Vamos a crear una función que reciba como argumento un arreglo con n cantidad de enteros, 
dicha función debe retornar un nuevo arreglo con todos los elementos del primer arreglo multiplicados por dos.
*/

var input = [1, 3, 4, 7, 2, 1, 9, 0]
var output = multiplyByTwo(input)


function multiplyByTwo (numbers){
    var multipliedNumbers = []
    for(var i = 0 ; i < numbers.length; i++){
        multipliedNumbers.push(numbers[i]*2)
    }
    return multipliedNumbers
}

console.log(input)
console.log(output)

/* Vamos a crear una función que convierta un objeto en un arreglo con los pares [key, value] por cada propiedad.*/

// Para resolver este ejercicio haremos uso del método Object.keys() el cual retorna un arreglo con el nombre de las propiedades de un objeto.

var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }

  console.log( Object.keys(car) );  // ['a', 'b', 'c']

  //Después usaremos un ciclo para ir recorriendo todas las propiedades del objeto e ir obteniendo sus respectivos valores.

  function keyValuePairs(obj) {
    var keys = Object.keys(obj)
    var pairs = []
    for(var i = 0; i < keys.length; i++) {
      pairs.push( [keys[i], obj[keys[i]]] )
    }
    return pairs;
}

var result = keyValuePairs(car);
console.log(result);

/* Reto 1
Completar la función calculateAverage la cual recibe numbers, un arreglo de n cantidad de enteros. La función debe retornar el promedio de todos los enteros que tenga numbers.
*/

var inputNumbers = [1,2,3,4,5,6,7]

function calculateAvarage (numbers) {
    var sum = 0
    for(var i = 0; i< numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length
}

var resultAvarge = calculateAvarage(inputNumbers)
console.log(resultAvarge)

/* Reto 2
Para este reto vamos a crear una función que haga lo opuesto.
Es decir, la función recibe un arreglo con pares [key, value] y debe retornar un objeto con sus respectivas propiedades y valores.
*/

var carArray = [ [ 'brand', 'Nissan' ], [ 'model', 'Versa' ], [ 'year', 2020 ] ]

function arrayToObject(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1]
    }
    return obj;
  }

  var arrayResult = arrayToObject(carArray)
  console.log(arrayResult)

  /* Reto 3
  Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos.
  */

  var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    var values = [];
    for (var i = 0; i < list.length; i++) {
      values.push( list[i][propertyName] );
    }
    return values;
  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]