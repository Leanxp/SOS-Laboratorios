// *----------------------------------------------------------------------------------------------* // 

//Primeros pasos en JAVASCRIPT (para ejecutar esto en terminal poner: node index.js)

console.log("-------------------------------> Introducción a JavaScript");
console.log("Hola Mundo");
var a = 1;
var b = "asdf";
console.log(a);
console.log(b);

//Bueno, ¿y qué tipo de variables tendremos en JavaScript?
console.log(" ");
console.log("-------------------------------> Tipos de variables");
var myInteger = 3;
console.log("Esto es una variable integer "+myInteger);
var myString = "Hola";
console.log("Esto es una variable string "+myString);
var myDouble = 1.2;
console.log("Esto es una variable double o flotante "+myDouble);
var myBoolean = true;
console.log("Esto es una variable booleana "+myBoolean);

//...Ahora imagínate que digo mi variable "a" va a ser mi integer y mi double ¿qué dará? Pues coge y te suma el integer y el double
var a = myInteger + myDouble;
console.log(a);
//...Pero ¿y si digo ahora que a es myInteger y myString y cambio el nombre de myString a "1"? Pues coge y me concatena los valores
var myString = "1";
var myInteger = 3;
var a = myInteger + myString;
console.log(a); //Pues una cadena con lo que sea, siempre es otra cadena.



//Pues también podremos ver los if 
console.log(" ");
console.log("-------------------------------> If, bucles y cositas");

var myString = "1";
var myInteger = 1;
console.log("...Comparando con dos iguales (==) ")
if(myInteger == myString)
	console.log("Son Iguales");
else
	console.log("No son iguales");

//Me dará que son iguales porque lo que hace es una transformación a un tipo que se pueda comparar y me dan iguales...
//Pero si lo que quiero es asegurarme que sea numérico, del mismo tipo de información pues le pongo 3 iguales, es decir.
console.log("...Comparando con tres iguales (===) ")
if(myInteger === myString)
	console.log("Son Iguales");
else
	console.log("No son iguales");

//Hay veces en las que trabajaremos con cadenas y bueno yo es que quiero trabajar con números enteros, bueno pues simplemente le haces un parseInt de eso para convertirlo

//Bueno y las cadenas se pueden hacer de comillas dobles y comillas simples
console.log(" ");
console.log("-------------------------------> Cadenas");
var myInteger = 1;
var myString = "dentro de la cadena";
var myString = 'dentro de la cadena';
var myString = "dentro de la 'cadena'";
var myString = 'dentro de la "cadena"';
console.log(myString);


// Ahora vamos a ver las funciones...
console.log(" ");
console.log("-------------------------------> Funciones");
//Imagínate que quiero hacerme una función de log personalizada, esto se hace con el constructor function
function log(msg){ //Lo que va a recibir es un parámetro porque soy un flojo y no tengo ganas de poner console.log todo el rato porque es un coñazo.
	console.log(msg);
}

log("pepe");
log(1);
log(true);

//Nosotros tenemos todo tipos de objetos ya predefinidos, en particular el objeto principal es el objeto "Object" que tu puedes inicializar exactamente igual que cuando lo haces en otro lenguaje y con esto creas un nuevo objeto, también tienes objetos de tipo array, de tipo mapa.
var a = new Object;
var a = new Array();
var a = new Map();


//Pero bueno, vamos a ver ahora los arrays porque son muy versátiles y los vamos a utilizar un montón.
console.log(" ");
console.log("-------------------------------> Arrays");

var a = new Array();
a[0] = 1;
a[1] = 2;
var b = [1,2,3,4,5,6,7];
//Podemos hasta mezclar un montón de mierda aquí en el array.
var c = [1,2,3,"string", true, 5,6,7];
console.log(b);
console.log(c);

//Además podemos ir añadiendo datos
var b = [1,2,3,4,5,6,7];
b.push(8);
console.log(b);


//Ahora veremos los iteradores, los for...
console.log(" ");
console.log("-------------------------------> Iteradores y buclesitos guays");
//¿Cómo podríamos hacer una impresión de cada uno de esos valores del array?
var b = [1,2,3,4,5,6,7];

for(var i=0; i<6; i++){ //El for es como siempre se ha hecho de toda la vida de dios
	log(i+":"+b[i]); //Esto me va a imprimir la clave y el valor...
}

//Sin embargo este tipo de for no es recomendable, ya que es un coñazo poner el tamaño con sus muerto, pero bueno va también puedes ponérselo así
console.log("=> Ahora con el b.length")
for(var i=0; i<b.length; i++){ 
	log(i+":"+b[i]);
}

//Pero sigue siendo un coñazo, es propenso a fallos, puedes poner un igual y puedes cascarla rápidamente, por eso lo mejor son los iteradores que se llama FOREACH........

console.log("=> Ahora con el forEach (1 opción)");
//Hay varias formas de hacerlo, puedes coger y definirte la función 
function handle(c){
	console.log(c);
}
b.forEach(handle); //Por lo tanto el foreach va a llamar a "handle" por cada elemento del array y le va a pasar como parámetro el elemento.


console.log("");
console.log("=> Ahora con el forEach (2 opción)"); //También en vez de hacerme una función "handle" puedo pasarla dentro del forEach
b.forEach(function (c){ //Si queréis en vez de tenerlo como function handle (c) podéis dejarle solo function (c)
	console.log(c);
});


//Ahora veremos las funciones lambda
console.log(" ");
console.log("-------------------------------> Funciones lambda");

//Si no queremos utilizar el function NOMBREDELAFUNCION (c) siempre puedes utilizar el lambda "=>" que lo detectará como función

//Esto es como era antes...
console.log("...El antes");
b.forEach(function (c){
	log(c);
});

//Así podemos usarlo ahora
console.log("...El después");
b.forEach((c) => {
	console.log(c);
});

console.log(" ");
console.log("-------------------------------> Filter");
//También tengo el iterador FILTER (que devuelve cierto o falso en función de lo que tu devuelvas deja pasar o no deja pasar ese elemento)
console.log("... Sin encadenar");
var numbers = [1,2,3,4,5,6,7];
var newNumbers = b.filter(function (n){
	return n>2;//Por ejemplo: Si c es mayor que 2 lo dejo pasar y si no, pos no.
});

newNumbers.forEach(log);

//De hecho puedo hacerlo encadenandolo sin tener que añadir variables...

console.log("... Encadenando");
var numbers = [1,2,3,4,5,6,7];

numbers
	.filter(function(n){
	return n>2;
}).forEach(log);


//Ahora veremos el operador MAP que nos permite transformar todos los elementos del array en otro
console.log(" ");
console.log("-------------------------------> Map");

var numbers = [1,2,3,4,5,6,7];
numbers
	.filter(function(n){
	return n>2;
}).map(function (n){ //Lo que me hará es sumarle uno a cada elemento del array.
	return n+1;
}).forEach(log);
 
//Ahora veremos el operador Reduce nos devuelve un único elemento, me coge un array, lo procesa y me devuelve un número.
//Reduce tiene dos parámetros 
console.log(" ");
console.log("-------------------------------> Reduce");

console.log("...Sin flechitas");
var s = numbers
	.filter(function(n){
		return n>2;
	}).map(function (n){
		return n+1;
	}).reduce(function (a,n){ //Y con esto me haría la suma de los elementos del array (en a te pasan el primer elemento y en n el segundo... y así)
		return a+n;
	})

console.log(s);

//Relajad el escroto, también podemos utilizar las flechitas!!!!
console.log("...Con flechitas");
var s = numbers
	.filter((n)=>{
		return n>2;
	}).map((n)=>{
		return n+1;
	}).reduce((a,n)=>{
		return a+n;
	})

console.log(s);

console.log(" ");
console.log("-------------------------------> Expresiones regulares");

var strings = ["pepe", "pepa", "paca", "luis"];
//Quiero quedarme solo por lo que empiece por "p"
strings
	.filter((s)=> {
		return s.match("pe"); //O le puedes poner una expresión regular con regerx o algo así se llama la página web te la buscas en google.
}).forEach(log);