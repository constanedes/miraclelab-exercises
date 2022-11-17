### 1. Analiza la salida del siguiente código: 
``` 
function f1() {
    console.log('f1');
}
function f2() {
    console.log('f2');
}
function f3() {
    console.log('f3');
}
function main() {
    console.log('main');
    setTimeout(f1, 50);
    setTimeout(f3, 30);
    new Promise((resolve, reject) =>
        resolve('I am a Promise, right after f1 and f3! Really?')
    ).then(resolve => console.log(resolve));
    new Promise((resolve, reject) =>
        resolve('I am a Promise after Promise!')
    ).then(resolve => console.log(resolve));
    f2();
} 
main();
```
<details>
<summary>Respuesta</summary

1. 'main'
2. 'f2'
3. 'I am a Promise, right after f1 and f3! Really?'
4. 'I am a Promise after Promise!'
5. 'f3'
6. 'f1'
</details>
<br><br>

### 2. ¿Cuál es la salida de este código?

``` 
function f1() {
    console.log('f1');
}
console.log("Let's do it!");
setTimeout(function() { console.log('in settimeout'); }, 0);
f1();
f1();
f1();
f1();
```
<details>
<summary>Respuesta</summary>

1. 'Let's do it!'
2. 'f1'
3. 'f1'
4. 'f1'
5. 'f1'
6. 'in settimeout'
</details>
<br><br>


### 3. ¿Qué afirmaciones son verdaderas? Selecciona varios.
- A JavaScript se ejecuta en un solo hilo
- B Por defecto, JavaScript es sincronico
- C Solo las promesas hacen que JavaScript sea asincronico
- D Todas las devoluciones de llamada de función son asíncronas

<details>
<summary>Respuesta</summary>

```
A. Verdadero
B. Verdadero
C. Falso
D. Falso
```

Aclaracion C: Las promesas y los callbacks, por ejemplo, hacen que JS sea asincrono, pero su funcionamiento difiere ya que las promesas se van al MicroTaskQueue (o PromiseJobs) y los callbacks se van al Task Queue
</details>
<br><br>


### 4. ¿Cuál es el resultado del siguiente código?

```
function f1() {
    console.log('f1');
}
function f2() {
    console.log('f2');
}
function f3() {
    console.log('f3');
}
function f4() {
    console.log('f4');
}
console.log("Let's do it!");
setTimeout(function() {f1();}, 0);
f4();
setTimeout(function() {f2();}, 5000);
setTimeout(function() {f3();}, 3000);
```

<details>
<summary>Respuesta</summary>

1. 'Let's do it!'
2. 'f4'
3. 'f1'
4. 'f3'
5. 'f2'
</details>
<br><br>


### 5. ¿Qué afirmación es verdadera? Seleccione Solo uno.

- A La pila de ejecución de funciones de JavaScript (pila de llamadas) nunca se vacía
- B La cola de trabajos tiene mayor prioridad que la cola de callback
- C El único trabajo de Event Loop es administrar la pila de llamadas
- D La excepción StackOverflow es aleatoria

<details>
<summary>Respuesta</summary>

```
A. Falso
B. Verdadero
C. Verdadero
D. Falso
```

</details>
<br><br>


### 6. Deduce la salida

```
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const cartoon = () => {
    console.log('Cartoon');
    setTimeout(tom, 5000);
    new Promise((resolve, reject) =>
        resolve('should it be right after Tom, before Jerry?')
    ).then(resolve => console.log(resolve))
    jerry();
}
cartoon();
```

<details>
<summary>Respuesta</summary>

1. 'Cartoon'
2. 'Jerry'
3. 'should it be right after Tom, before Jerry?'
1. 'Tom'

</details>
<br><br>

### 7. Deduce la salida

```
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');
const cartoon = () => {
    console.log('Cartoon');
    setTimeout(tom, 50);
    setTimeout(doggy, 30);
    new Promise((resolve, reject) =>
        resolve('I am a Promise, right after tom and doggy! Really?')
    ).then(resolve => console.log(resolve));
    new Promise((resolve, reject) =>
        resolve('I am a Promise after Promise!')
    ).then(resolve => console.log(resolve));
    jerry();
}
cartoon();
```

<details>
<summary>Respuesta</summary>

1. 'Cartoon'
2. 'Jerry'
3. 'I am a Promise, right after tom and doggy! Really?'
4. 'I am a Promise after Promise!'
5. 'Doggy'
6. 'Tom'

</details>
<br><br>

### 8. Deduce la salida

```
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');
f4();
setTimeout(f1, 0);
new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));
setTimeout(f2, 2000);
new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));
setTimeout(f3, 0);
new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

<details>
<summary>Respuesta</summary>}

1. 'f4'
2. 'Boom'
3. 'Sonic'
4. 'Albert'
5. 'f1'
6. 'f3'
7. 'f2'

</details>
<br><br>

```
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');
f4();
setTimeout(f1, 0);
new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));
setTimeout(f3, 0);
new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

<details>
<summary>Respuesta</summary>

1. 'f4'
2. 'Sonic'
3. 'Albert'
4. 'f1'
5. 'f2'
6. 'f3'

</details>

<br><br>

---
<br>

<div style="text-align: center;"> <b><i> Constantino Edes - 2022<i><b></div>

