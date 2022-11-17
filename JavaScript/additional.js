"use strict";
// === Ejercicio 1 ===
/* Encuentre el valor más cercano a un valor dado.
Se proporciona una lista de valores en forma de arreglo y un valor para el que se necesita
encontrar el más cercano.
Por ejemplo, tenemos el siguiente conjunto de números: 4, 7, 10, 11, 12, 17, y necesitamos
encontrar el valor más cercano al número 9. Si ordenamos este conjunto en orden
ascendente, entonces a la izquierda del número 9 estará el número 7 ya la derecha estará el
número 10. El número 10 está más cerca que 7, lo que significa que la respuesta correcta
es 10.
Algunas aclaraciones:
• Si 2 números están a la misma distancia, // debe elegir el más pequeño
• El conjunto de números nunca está vacío, es decir, el tamaño es >=1
• El valor dado puede estar en el conjunto, lo que significa que es la respuesta
• El conjunto puede contener números tanto positivos como negativos, pero siempre
son enteros
• El conjunto no está ordenado y consta de números únicos (no repetidos)
Entrada: dos argumentos. Una lista de valores en forma de arreglo. El valor buscado es
un int. */

function nearestValue(arr, num) {
    const min = Math.abs(arr[0] - num);
    const minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - num);
        if (diff < min || (diff === min && arr[i] < arr[minIndex])) {
            min = diff;
            minIndex = i;
        }
    }
    return arr[minIndex];
}
// console.log(nearestValue([4, 7, 10, 11, 12, 17], 9) === 10);
// console.log(nearestValue([4, 7, 10, 11, 12, 17], 8) === 7);
// console.log(nearestValue([4, 8, 10, 11, 12, 17], 9) === 8);
// console.log(nearestValue([4, 9, 10, 11, 12, 17], 9) === 9);
// console.log(nearestValue([4, 7, 10, 11, 12, 17], 0) === 4);





// === Ejercicio 2 === 
/* El término matemático diferencia simétrica (sim) de dos conjuntos es el conjunto de elementos
que están en cualquiera de los dos conjuntos pero no en ambos. Por ejemplo, para
conjuntos A = {1, 2, 3} y B = {2, 3, 4}, A sim B = {1, 4}.
La diferencia simétrica es una operación binaria, lo que significa que opera solo en dos
elementos. Entonces, para evaluar una expresión que involucra diferencias simétricas entre
tres elementos (A sim B sim C), // debemos completar una operación a la vez. Así, para los
conjuntos A y B anteriores, y C = {2, 3}, A sim B sim C = (A sim B) sim C = {1, 4}
sim {2, 3} = {1, 2, 3, 4}.
Cree una función que tome dos o más matrices y devuelva una matriz de su diferencia
simétrica. La matriz devuelta // debe contener solo valores únicos (sin duplicados). */

function sym(...args) {
    let result = [];
    for (let array of args) {
        for (let item of new Set(array)) {
             (!result.includes(item)) ? (result.push(item)) : ( result.splice(result.indexOf(item), 1) );
        }
    }
    return result.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])) // debe devolver [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4]));// debe contener solo tres elementos
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // debe devolver [3, 4, 5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // debe contener solo tres elementos
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // debe devolver [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // debe contener solo tres elementos
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // debe devolver [1, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // debe contener solo tres elementos
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // debe devolver [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));// debe devolver solo tres elementos
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // debe devolver [2,3, 4, 6, 7];
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // debe contener solo cinco elementos
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // debe devolver [1, 2, 4, 5, 6,7, 8, 9]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1, 2])); // debe contener solo ocho elements
