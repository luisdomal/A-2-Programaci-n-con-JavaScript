/* Ejercicio 1 
Ya mencionamos que podemos usar un constructor para crear múltiples objetos como: */

var john = {
	name: 'John',
	birthYear: 1990,
	job: 'Developer'
}

console.log(john)

// La forma más común de hacer esto es mediante un function constructor, el cuál es una expresión de función como la siguiente:

var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

var john2 = new Person('John', 1990, 'Developer');
console.log(john2)

var mark = new Person('Mark', 1985, 'Teacher');
var jane = new Person('Jane', 1975, 'Designer');
console.log(mark)
console.log(jane)

// Crear constructores para instanciar objetos y heredar propiedades entre constructores.

var Person2 = function(name) {
    this.name = name;
  }
  
  var john = new Person2('John');

  var Developer = function(name, skills, yearsOfExperience) {
	Person2.call(this, name);
	this.skills = skills;
	this.yearsOfExperience = yearsOfExperience;
}

var luis= new Developer('Luis', 'JavaScript', 10);

console.log( luis );

// Vamos a agregar un método calculateAge() similar al que hicimos la sesión anterior, pero no lo vamos a poner en el constructor, en su lugar lo vamos a crear dentro del prototype.


Person.prototype.calculateAge = function() {
    var today = new Date();
    var year = today.getFullYear();

    console.log( year - this.birthYear );
  }

// Ahora vamos a crear múltiples instancias de Person.

var john = new Person('John', 1990, 'Developer');

var mark = new Person('Mark', 1985, 'Teacher');

var jane = new Person('Jane', 1975, 'Designer');

// Aún así podemos llamar calculateAge() en los tres objetos.

john.calculateAge();

mark.calculateAge();

jane.calculateAge();


/* Reto 1:
Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

Agregar los siguientes métodos al prototype de Vec:

    1. plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.
    2. minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.
    3. length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).
*/

var Vec = function(x, y) {
    this.x = x
    this.y = y
  }
  
  Vec.prototype.plus = function(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  
  Vec.prototype.minus = function(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
  
  Vec.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979