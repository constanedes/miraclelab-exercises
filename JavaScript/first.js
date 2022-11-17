/* 
=== Ejercicio 1 ===   
Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
• ”a” - ”apple”
• ”b” - ”bird”
• ”c” - ”cat”
• default - ”stuff” 
*/

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}
console.log(caseInSwitch("c")); /* "cat"

/*
=== Ejercicio 2 ===
Añade los números del 0 al 5 incluido, en orden ascendente en array usando una estructura
de repeticion for.
*/

const arr1 = []
for(i = 0; i <= 5; i++){
    arr1.push(i);
}
console.log(arr1);

/* 
=== Ejercicio 3 ===   
Añade los número impares del 1 al 9 en array usando la estructura de repeticion for 
*/

const arr2 = []
for(i = 1; i <= 9; i+=2){
    arr2.push(i);
}
console.log(arr2);

/* 
=== Ejercicio 4 ===    
Añade los número pares del 1 al 9 en orden descendente en array usando la estructura de
repeticion for
*/

const arr3 = [];
for(i = 9; i > 0; i-=2){
    arr3.push(i)
}
console.log(arr3)

/* 
=== Ejercicio 5 ===   
En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
un apodo diferente.
Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta
de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba
(más alto) a abajo (más bajo):

Strokes         Return
1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!" 
*/

const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore(par, strokes) {

    switch (true) {
        case strokes >= par + 3:
            return names[6];
        case strokes === par + 2:
            return names[5];
        case strokes === par + 1:
            return names[4];
        case strokes === par:
            return names[3];
        case strokes === par - 1:
            return names[2];
        case strokes === par - 2:
            return names[1];
        case strokes === 1:
            return names[0];
        default:
            return "Error";
    }
}
console.log(golfScore(5, 6)); // Birdie


/* 
=== Ejercicio 6 ===   
Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
/*
• 1-3 - ”Low”
• 4-6 - ”Mid”
• 7-9 - ”High” 
*/

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "Error";
    }
    return answer;
}
console.log(sequentialSizes(5)); /* "Mid"


/* 
=== Ejercicio 7 ===   
Escribe una estructura if/else if para cumplir con las siguientes condiciones

• num < 5 - return "Tiny"
• num < 10 - return "Small"
• num < 15 - return "Medium"
• num < 20 - return "Large"
• num >= 20 - return "Huge" 
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } 
    else if (num < 10) {
        return "Small";
    } 
    else if (num < 15) {
        return "Medium";
    } 
    else if (num < 20) {
        return "Large";
    } 
    else {
        return "Huge";
    }
}

console.log(testSize(7)); /* "Small"

/*
=== Ejercicio 8 ===   
Cambie el orden logico en la función de manera que retorne de forma correcta en todos
los casos 
*/
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } 
    else if (val < 10) {
        return "Less than 10";
    } 
    else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(10)); /* "Greater than or equal to 10"

/* 
=== Ejercicio 9 ===   
Convierte la lógica de la siguiente función para usar sentencias else if
*/
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    return "Between 5 and 10";
}

console.log(testElseIf(10)); 

/* 
=== Ejercicio 10 ===  
Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos
del arreglo arr 
*/

function sum(arr, n) { 
    if ( (n <= 0 || n === undefined) || (arr.length < n) ) {
        return 0;
    }
    else {
        return arr[n-1] + sum(arr, n-1);
    }
}
console.log(sum([1, 2, 3, 4, 5], 4)); /* 10

/* 
=== Ejercicio 11 ===   
Susituye la cadena de if/else por un estamento switch 
*/

function chainToSwitch(val) {
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "Error";
    }
    return answer;
}

console.log(chainToSwitch(1)); /* "There is no #1"
   

/* 
=== Ejercicio 12 ===   
Escribe un sentencia switch que pruebe val y establezca answer con las siguientes condiciones 
(a) - ”alpha”
(b) - ”beta”
(c) - ”gamma”
(d) - ”delta”
*/

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "alpha";
            break;
        case "b":
            answer = "beta";
            break;
        case "c":
            answer = "gamma";
            break;
        case "d":
            answer = "delta";
            break;
        default:
            answer = "Error";
    }
    return answer;
}
console.log(caseInSwitch("d")); /* "delta"

/* 
=== Ejercicio 13 ===   
Añade los números del 5 al 0 incluido, en orden descendente en array usando un la
estructura de repeticion while. 
*/

let array2 = [];
let i = 5;
while(i >= 0){
    array2.push(i);
    i--;
}
console.log(array2);


/* 
=== Ejercicio 14 ===   
Crear una función que reciba un arreglo de números enteros positivos desordenados y
devuelva otro arreglo con los números ordenados. 
*/

const orderArray = arr =>   {
    if (arr.length === 0) {
        return [];
    }
    else {
        let arrayOrdenado = arr.sort((a, b) => a - b);
        return arrayOrdenado;
    }
}
let array = [3, 45, 6, 2, 7, 10, 8]
console.log(orderArray(array)); 

/* 
=== Ejercicio 15 ===   
Crear una función que reciba un número entero positivo y devuelva true si dicho número
es par o false en caso contrario. 
*/

const esPar = num => num % 2 === 0;
console.log(esPar(4)); // true


/* 
=== Ejercicio 16 ===   
Crear una función que reciba como argumentos dos números y una operación (su nombre
como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números
proporcionados 
*/

function calculadora(num1, num2, operador) {
    switch (operador) {
        case 'suma' || '+':
            return num1 + num2;
        case 'resta' || '-':
            return num1 - num2;
        case 'multiplicacion' || '*':
            return num1 * num2;
        case 'division' || '/':
            return num2 === 0 ? "No se puede dividir por 0" : num1 / num2;
        default:
            return 'Operador no valido';
    }
}
console.log(calculadora(9, 0, 'division')); /* 10

/* 
=== Ejercicio 17 ===   
Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
por divisor menor que limite. Ambos valores serán siempre enteros positivos.
*/

function maximoDivisible (divisor, limite) {
    if(Number.isInteger(divisor) && Number.isInteger(limite)) {
        if (divisor < 0 || limite < 0) {
            return 'Los valores deben ser positivos';
        }
    }
    while (limite) {
        if (limite % divisor === 0){
            return limite;
        } 
        limite--;
    }
}
   
console.log(maximoDivisible(4, 22)); 

/* 
=== Ejercicio 18 ===   
Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el
número de días que tardará la planta en medir la alturaDeseada. 
*/


function diasParaAlcanzar(velocidadCrecimiento ,velocidadDecrecimiento ,alturaDeseada) {
    if (!Number.isInteger(velocidadCrecimiento) || !Number.isInteger(velocidadDecrecimiento) || !Number.isInteger(alturaDeseada)) {
        return "Error, los valores deben ser enteros";
    }
    if (velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0 || alturaDeseada <= 0) {
        return "Error: las variables deben ser positivas";
    }
    let dias = 0;
    let altura = 0;
    while (altura < alturaDeseada) {
        dias++;
        altura += velocidadCrecimiento;
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
console.log(diasParaAlcanzar(6, 4, 10)); 

/* 
=== Ejercicio 19 ===   
Crea una función que devuelva el perímetro de un círculo a partir de su radio. 
*/

function perimetroCirculo(r) {
    if (typeof r !== "number") {
        return "Error, el valor debe ser un número";
    }
    return 2 * r * Math.PI;
}

console.log(perimetroCirculo(3) === 18.84955592153876);
console.log(perimetroCirculo(6) === 37.69911184307752);

/* 
=== Ejercicio 20 ===   
Crea una función que devuelva el area de un círculo a partir de su radio. 
*/

function areaCirculo(r) {
    if (typeof r !== "number") {
        return "Error, el valor debe ser un número";
    }
    return Math.PI * r * r;
}
console.log(areaCirculo(2) === 12.566370614359172);
console.log(areaCirculo(8) === 201.06192982974676);

/* 
=== Ejercicio 21 ===   
Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos
(Teorema de Pitágoras). 
*/

function hipotenusa(c1, c2) {
    if (typeof c1 !== "number" || typeof c2 !== "number") {
        return "Error, los valores deben ser números";
    }
    return Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
}

console.log(hipotenusa(7, 11));

/* 
=== Ejercicio 22 ===   
Escribe una función que simule el lanzamiento de una moneda al aire y devuelva si ha
salido cara o cruz. Podemos utilizar el objeto Math 
*/

const lanzarMoneda = () => Math.random() < 0.5 ? "Cara" : "Cruz";
console.log(lanzarMoneda());

/* 
=== Ejercicio 23 ===   
Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre
los dos suman 10 
*/

function azarDados() {
    let cont = 0;
    for (let i = 0; i < 100; i++) {
        let a = Math.floor(Math.random() * (7 - 1)) + 1;
        let b = Math.floor(Math.random() * (7 - 1)) + 1;
        if (a + b === 10) {
            console.log(a  + " " + b);
            cont++;
        }
    }
    return cont;
}   

console.log(azarDados());


/* 
=== Ejercicio 24 ===   
Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n
veces: 
*/

function repite(str, n) {
   let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

console.log(repite("Hola", 3));

/* 
=== Ejercicio 25 ===   
Crea una función que reciba una frase como cadena y devuelva la palabra más larga. 
*/

function palabraMasLarga(str) {
    
    let palabras = str.split(" ");
    let palabraMasLarga = palabras[0];
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }
    return palabraMasLarga;
}
console.log(palabraMasLarga("Erase una vez que se era") === "Erase");

/* 
=== Ejercicio 26 ===   
Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
primera letra mayúscula 
*/

function primeraMayuscula(str) {
    let palabras = str.split(" ");
    let result = "";
    for (let i = 0; i < palabras.length; i++) {
        result += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1) + " ";
    }
    result = result.trim(); /* quita el espacio al final */
    return result;
}
console.log(primeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha");

/* 
=== Ejercicio 27 ===   
Crea una función que reciba una cadena y la devuelva en camelCase 
*/


function camelize(str) {
    let result = "";
    let palabras = str.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        if (i === 0) {
            result += palabras[i].charAt(0).toLowerCase() + palabras[i].slice(1);
            continue;
        }
        result += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    result = result.trim(); /* quita el espacio al final */
    return result;
}
console.log(camelize("Hola a todos que tal") === "holaATodosQueTal");


/* 
=== Ejercicio 28 ===   
Crea una función que reciba un número y devuelva una cadena con formato ordinal inglés.
Esto es:
• termina en 1 –> ‘301st‘
• termina en 2 –> ‘302nd‘
• termina en 3 –> ‘303rd‘
• cualquier otra cosa –> ‘300th‘ 
*/

function formaToIngles(num) {
    let result = num.toString();
    if (result.endsWith("1")) {
        result += "st";
    } 
    else if (result.endsWith("2")) {
        result += "nd";
    }
    else if (result.endsWith("3")) {
        result += "rd";
    }
    else {
        result += "th";
    }
    return result;
}
console.log(formaToIngles(303)); // "303rd"

/* 
=== Ejercicio 29 ===   
Vamos a calcular el precio de un carrito de compra. Un carrito de compra tiene una
propiedad productos que es una lista de los productos. Cada producto tiene las siguientes
propiedades:
• nombre: Nombre del producto (Papel higiénico, leche, ...)
• unidades: Número de elementos que se van a comprar de dicho producto
• precio: Precio unitario del producto
Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el
precio del producto. Crear el código necesario para soportar esta funcionalidad.
Datos de prueba: 
*/

const carrito = {
    productos: [
        {
            nombre: "papel higienico",
            unidades: 4,
            precio: 5,
        },
        {
            nombre: "chocolate",
            unidades: 2,
            precio: 1.5,
        },
    ],
    get precioTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.unidades * producto.precio;
        });
        return total;
    },
};

console.log(carrito.precioTotal); 

/* 
=== Ejercicio 30 ===   
En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si
lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto
se llama conteo de cartas.
Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor
de acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto. 
Cuando la cuenta es cero o negativa, el jugador debe apostar poco.
Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un
número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo
con el valor de card. La función devolverá una cadena con el recuento actual y la cadena
Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. El recuento actual
y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio

Count   Cards
+1      2, 3, 4, 5, 6
0       7, 8, 9
-1      10, J, Q, K, A

Ejemplo:
        -3 Hold
        5 Bet

*/


let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count = 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
       return `${count} Bet`;
    }
    else {
        return `${count} Hold`;
    }
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

console.log(cc(5));

/* 
=== Ejercicio 31 ===   
Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
de todos los argumentos 
*/

function sumaArgumentos(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sumaArgumentos(1, 2, 3, 4, 5)); /* 15

/* 
=== Ejercicio 32 ===   
Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos
(incluidos números o cadenas) y devuelva la suma de solo los números 
*/

function addOnlyNums(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            result += args[i];
        }
    }
    return result;
}

console.log(addOnlyNums(1, 2, 3, 'a', 'b', 'c')); /* 6

/* 
=== Ejercicio 33 ===  
Escriba una función llamada countTheArgs que pueda tomar cualquier cantidad de argumentos
y devuelva la cantidad de argumentos que se pasan 
*/

const countTheArgs = (...args) => args.length;
console.log(countTheArgs(1, 2, 3, 4, 5)); /* 5

/* 
=== Ejercicio 34 ===    
Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
y devuelva un solo arreglo que combine ambos (usando el operador ...) 
*/

const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); /* [1, 2, 3, 4, 5, 6]

/* 
=== Ejercicio 35 ===   
Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos
y devuelva un arreglo de solo los argumentos únicos
*/

function onlyUniques(...args) {
    return args.filter((arg, index) => args.indexOf(arg) === index);
}

