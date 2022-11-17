/* === Ejercicio 1 ===
Dado el siguiente codigo:
- Usando tu IDE preferido, coloca el cursor sobre las errores en rojo para inspeccionarlos
- Coloca el cursor sobre las variables para inspeccionar sus tipos
- Arregle el error en la linea 2 cambiando el valor de pi al tipo esperado */
function ejercicioUno(): void {
    let pi: number = +'3.14159';
    let tau = pi * 2;
    console.log(`[Ejercicio 1.1] ${tau} es ${pi} veces el dos.`);
}


/* === Ejercicio 2 === 
Dado el siguiente codigo:
- Inspeccionar el tipo de ‘torta‘
- Añadir una anotación de tipo explícito a ‘torta‘
- Intenta asignar tipos inválidos, por diversión */
function ejercicioDos(): void {
    let torta: string = '🍰';
    console.log(`[Ejercicio 1.2] Me gusta comer torta con sabor a ${torta}.`);
}


/* === Ejercicio 3 ===
Dado el siguiente codigo:
- Inspeccione el error, luego corríjalo */
function ejercicioTres(): void {
    let esPablo: boolean = true;
    console.log(`[Ejercicio 1.3] ${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);
}


/* === Ejercicio 4 ===
Dado el siguiente codigo:
- Añadir anotaciones de tipo (lo más explícitas posible)
- Solucionar errores (si corresponde) */
function ejercicioCuatro(): void {
    const entero: number = 6;
    const decimal: number = 6.66;
    const hexadecimal: number = 0xf00d;
    const binario: number = 0b1010011010;
    const octal: number = 0o744;
    const ceroNegativo: number = -0;
    const enRealiadadNumero: number = NaN;
    const mayorNumero: number = Number.MAX_VALUE;
    const elNumeroMasGrande: number = Infinity;
    const miembros: number[] = [
        entero,
        decimal,
        hexadecimal,
        binario,
        octal,
        ceroNegativo,
        enRealiadadNumero,
        mayorNumero,
        elNumeroMasGrande,
    ];
    miembros[0] = Number('12345');
    console.log('[Ejercicio 1.4]', miembros);
}



/*  === Ejercicio 5 ===
Dado el siguiente codigo:
- Añadir anotaciones de tipo (lo más explícitas posible)
- Solucionar errores (si corresponde) */
function ejercicioCinco(): void {
    const secuencia: number[] = Array.from(Array(10).keys());
    const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
    const cadenasYNumeros: (string | number)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
    const todosMisArreglos: (string | number)[][] = [
        secuencia,
        animales,
        cadenasYNumeros,
    ];
    console.log('Ejercicio 1.5', todosMisArreglos);
}



/* === Ejercicio 6 ===
Queremos representar un elemento de inventario como una estructura donde la primera entrada
es el nombre del artículo y la segunda es la cantidad.
Dado el siguiente codigo:
- Añadir anotaciones de tipo (lo más explícitas posible) 
- Solucionar errores (si corresponde) */
function ejercicioSeis(): void {
    const elementoInventario: [string, number] = ['tuerca', 11];
    const [nombre, cantidad]: [string, number] = elementoInventario;
    const mensaje: string = agregarInventario(nombre, cantidad);
    console.log('[Ejercicio 1.6]', mensaje);
    function agregarInventario(nombre: string, cantidad: number): string {
        return (`Se agregaron ${cantidad} ${nombre}s al inventario.`);
    }
}



/* === Ejercicio 7 ===
TypeScript es inteligente sobre los posibles tipos de una variable, dependiendo de la ruta del
código. Dado el siguiente codigo:
- Simplemente inspeccione los tipos posibles moviéndose sobre el ’texto’ para ver cómo
cambia el tipo inferido si se pueden hacer suposiciones de forma segura sobre los tipos
posibles dentro de la ruta del código dado */
function ejercicioSiete(): void {
    function doStuff(value: any): void {
        if (typeof value === 'string') {
            console.log(value.toUpperCase().split('').join(' '));
        } else if (typeof value === 'number') {
            console.log(value.toPrecision(5));
        }
        value; // coloque el cursor sobre `valor` aqui
        console.log('[Ejercicio 2.1]');
    }
}



/* === Ejercicio 8 ===  */
// Dado el siguiente codigo:+
function ejercicioOcho(): void {
    interface EggLayer {
        layEggs(): void;
    }
    interface Flyer {
        fly(height: number): void;
    }
    interface Swimmer {
        swim(depth: number): void;
    }
    // * agregar alias de tipo(s) aqui
    type FishLike = Swimmer & EggLayer;
    type BirdLike = EggLayer & Flyer;
    // -------------------------------
    class Bird implements BirdLike {
        constructor(public species: string) { }
        layEggs(): void {
            console.log('Poniendo huevos de aves.');
        }
        fly(height: number): void {
            console.log(`Volando a la altura de ${height} metros.`);
        }
    }
    class Fish implements FishLike {
        constructor(public species: string) { }
        layEggs(): void {
            console.log('Poniendo huevos de pescado.');
        }
        swim(depth: number): void {
            console.log(`Nadando a una profundidad de ${depth} metros.`);
        }
    }
    function getRandomAnimal(): Fish | Bird {
        const animals = [
            new Bird('puffin'),
            new Bird('kittiwake'),
            new Fish('sea robin'),
            new Fish('leafy seadragon'),
        ];
        return animals[Math.floor(Math.random() * animals.length)];
    }
    //  ? invoca el metodo segun la clase de animal
    function interrogateAnimal(animal = getRandomAnimal()): string {
        if (animal instanceof Fish) {
            animal.swim(10);
        }
        if (animal instanceof Bird) {
            animal.fly(100);
        }
        return animal.species;
    }
    console.log('[Ejercicio 2.2]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
}



/* === Ejercicio 9 === 
Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘ */
function ejercicioNueve(): void {
    function padLeft(value: string, padding: number | string): string {
        // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
        // si padding es una cadena, return padding + value
        return typeof padding === 'number'
            ? `${Array(padding + 1).join(' ')}${value}`
            : padding + value;
    }
    console.log('[Ejercicio 2.3]', `${padLeft('', 0)} \n ${padLeft('', '')}`);
}



/* === Ejercicio 10 === 
Dado el siguiente codigo
- Añadir anotaciones de tipo (‘any‘ excluido)
- Inspeccione el tipo de ‘element‘ en diferentes ramas de código
- Bonificación: convertir ‘flatten‘ en una función genérica */
function ejercicioDiez(): void {
    type numbersArray = (number | number[])[];
    const numbers: numbersArray = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
    function flatten(array: numbersArray): number[] {
        const flattened: number[] = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                flattened.push(...flatten(element));
            } else {
                flattened.push(element);
            }
        }
        return flattened;
    }
    console.log('[Ejercicio 2.4]', flatten(numbers));
}



/* === Ejercicio 11 ===
Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. 
- Defina dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
- Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
- Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
volar
- Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible */
function ejercicioOnce(): void {
    interface EggLayer {
        layEggs(): void;
    }
    interface Flyer {
        fly(height: number): void;
    }
    interface Swimmer {
        swim(depth: number): void;
    }
    // * agregar alias de tipo(s) aqui
    type Animal = Bird | Fish;
    type FishLike = Swimmer & EggLayer;
    type BirdLike = Flyer & EggLayer;
    //  ---------------------------
    class Bird implements BirdLike {
        constructor(public species: string) { }
        layEggs(): void {
            console.log('Poniendo huevos de aves.');
        }
        fly(height: number): void {
            console.log(`Volando a la altura de ${height} metros.`);
        }
    }
    class Fish implements FishLike {
        constructor(public species: string) { }
        layEggs(): void {
            console.log('Poniendo huevos de pescado.');
        }
        swim(depth: number): void {
            console.log(`Nadando a una profundidad de ${depth} metros.`);
        }
    }
    function getRandomAnimal(): Animal {
        //  * Animal type is Bird OR Fish
        const animals: Animal[] = [
            new Bird('puffin'),
            new Bird('kittiwake'),
            new Fish('sea robin'),
            new Fish('leafy seadragon'),
        ];
        return animals[Math.floor(Math.random() * animals.length)];
    }
    function interrogateAnimal(animal = getRandomAnimal()): string {
        if (animal instanceof Fish) {
            animal.swim(10);
        }
        if (animal instanceof Bird) {
            animal.fly(100);
        }
        return animal.species;
    }
    console.log('[Ejercicio 2.5]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
}



/* === Ejercicio 12 ===
Dado el siguiente código:
- Agregue tipos explícitos a los parámetros y el tipo de retorno
- Solucione cualquier error resultante de tipos inválidos */
function ejercicioDoce(): void {
    function add(x: number, y: number): number {
        return x + y;
    }
    function sumArray(numbers: number[]): number {
        return numbers.reduce(add, 0);
    }
    const someSum = sumArray([3, 6, 9]);
    console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);
}



/* === Ejercicio 13 ===
Dado el siguiente código: 
- Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘
- Haz que el parámetro de ‘message‘ sea *optional */
function ejercicioTrece(): void {
    const bankAccount = {
        money: 0,
        deposit(value: number, message?: string | undefined): void {
            this.money += value;
            if (message) {
                console.log(message);
            }
        },
    };
    bankAccount.deposit(20);
    bankAccount.deposit(10, 'Deposit received');
    console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);
}


/* === Ejercicio 14 ===
Para una palabra dada, calculamos su puntuación en Scrabble®
- Añadir anotaciones de tipo siempre que sea posible */
/*Ejercicio 3.3
Para una palabra dada, calculamos su puntuación en Scrabble®*/
function ejercicioCatorce(): void {
    function computeScore(word: string) {
        const letters: string[] = word.toUpperCase().split('');
        return letters.reduce((accum: number, curr: string) => accum += getPointsFor(curr), 0);
    }
    function getPointsFor(letter: string) {
        const lettersAndPoints: (string | number)[][] = [
            ['AEOIULNRST', 1],
            ['DG', 2],
            ['BCMP', 3],
            ['FHVWY', 4],
            ['K', 5],
            ['JX', 8],
            ['QZ', 10],
        ];
        return lettersAndPoints.reduce((computedScore: number, pointsTuple: (any)[]) => {
            const letters: string = pointsTuple[0];
            const score: number = pointsTuple[1];
            if (letters.split('').find((ll: string) => ll === letter)) {
                return computedScore += score;
            }
            return computedScore;
        }, 0);
    }
    console.log('[Ejercicio 3.3]', `${computeScore('scrabble')}`);
}



/* === Ejercicio 15 ===
Dado el siguiente codigo:
- Añadir tipos explícitos a los parámetros y tipo de retorno
- Añadir un saludo predeterminado: ”hola” */
function ejercicioQuince(): void {
    function greet(greeting: string = 'Hola'): string {
        return greeting.toUpperCase();
    }
    const defaultGreeting = greet();
    const portugueseGreeting = greet('Oi como vai!');
    console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
}



/* === Ejercicio 16 ===
Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (indiscriminadamente) a *cualquier* tipo de matriz.
Un par de problemas con esto:
1. El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.
2. Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incrementByTwo‘)
Dado el siguiente codigo: 

- Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
determinada. Fije estos valores a los tipos correctos)

- Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan */
function ejercicioDieciseis(): void {
    const numberCollection: number[] = [];
    const stringCollection: string[] = [];
    type Collection<T> = T[];
    function pushToCollection<T>(item: T, collection: Collection<T>): Collection<T> {
        collection.push(item);
        return collection;
    }
    // Anadir algunas cosas a las colecciones
    pushToCollection('false', stringCollection);
    pushToCollection('hi', stringCollection);
    // pushToCollection([], stringCollection); Error: never[] is not assignable to string[]
    pushToCollection(1, numberCollection);
    pushToCollection(2, numberCollection);
    pushToCollection(3, numberCollection);
    const incrementedByTwo = numberCollection.map((num) => num + 2);
    console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`)
}



/* === Ejercicio 17 ===
Dado el siguiente codigo:
- Añadir tipo de parámetro de forma explícita en método ‘greet‘
- Agregar el tipo de retorno explicito al metodo greet */
function ejercicioDiecisiete(): void {
    class MC {
        greet(event: string = 'party'): string {
            return `Bienvenido al ${event}`;
        }
    }
    const mc: MC = new MC();
    console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));
}



/* === Ejercicio 18 ===
Dado el siguiente codigo:
- Añadir tipos de parámetros explícitos al constructor
- Agregue parámetros con tipos para almacenar valores */
function ejercicioDieciocho(): void {
    class Person {
        name: string;
        age: number;
        constructor({ name, age }: { name: string, age: number }) {
            this.name = name;
            this.age = age;
        }
    }
    const jane: Person = new Person({ name: 'Juan', age: 36 });
    console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.name}.`);
}



/* === Ejercicio 19 ===
Dado el siguiente codigo:
- Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
- Reduzca la clase a tres líneas de código manteniendo la funcionalidad */
function ejercicioDiecinueve(): void {
    class Employee {
        constructor(public title: string, public salary: number) {
            this.salary = salary
            this.title = title;
        }
    }
    const employee: Employee = new Employee('Ingeniero', 100000);
    console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee.salary}.`);
}



/* === Ejercicio 20
Dado el siguiente codigo: 
- Añadir tipos
- Hacer que la clase Snake herede de Animal
- Hacer que la clase Pony herede Animal
- Hacer que el miembro del nombre no pueda ser accedido públicamente */
function ejercicioVeinte(): void {
    // hacer una clase que no se pueda instanciar    
    abstract class Animal {
        constructor(protected name: string) { }
        move(meters: number): void {
            console.log(`${this.name} se movio ${meters}m.`);
        }
    }
    class Snake extends Animal {
        move(meters: number = 5): void {
            super.move(meters);
            console.log('Deslizandose...');
        }
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 5 metros
    }
    class Pony extends Animal {
        move(meters: number = 60): void {
            super.move(meters);
            console.log('Galopando...');
            // debe invocar al metodo `move` del padre con un galope predeterminado
            // de 60 metros
        }
    }
    // La clase Animal no debe ser instanciable.
    // Eliminar o comentar una vez que se logra el error deseado.
    // Error:   const andrew = new Animal('Andrew el Animal');
    // Error:   andrew.move(5);
    const sammy: Snake = new Snake('Sammy la serpiente');
    sammy.move();
    // Error:   console.log(sammy.name); 
    const pokey: Pony = new Pony('Pokey el pony');
    pokey.move(34);
    // Error:   console.log(pokey.name); 
}



/* === Ejercicio 21 ===
Dado el siguiente codigo:
Elimine el error sin cambiar las referencias a ‘Student.school‘ */
function ejercicioVeintiuno(): void {
    class Student {
        static school: string = 'Harry Herpson High School';
        constructor(private name: string) { }
        introduction() {
            console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
        }
    }
    const student: Student = new Student('Morty');
    console.log(Student.school);
    student.introduction();
}



/* === Ejercicio 22 ===
Dado el siguiente codigo:
- Crea una interfaz ‘CartItem‘ y reemplaza el tipo de parametros con ella
- Hacer idVariante opcional */
function ejercicioVeintidos(): void {
    interface CartItem {
        id: number;
        name: string;
        idVariante?: number;
    }
    function agregarAlCarro(item: CartItem): void {
        console.log('[Ejercicio 2.1]', `Agregando '${item.name}' al carro de compras.`);
    }
    agregarAlCarro({ id: 1, name: 'Zapatos de cuero' });
}



/* === Ejercicio 23 ===
Dado el siguiente codigo:
-  Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso a las propiedades miembros ‘nombre‘ y ‘edad‘ */
function ejercicioVeintitres(): void {
    interface Persona {
        nombre: string;
        edad: number;
    }
    class Persona {
        constructor(public nombre: string, public edad: number) { }
    }
    const juan: Persona = new Persona('Juan', 31);
    console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
}



/* === Ejercicio 24 ===
Dado el siguiente codigo:
- Cree una interfaz ‘Coords‘ que tenga las propiedades numéricas ‘latitud‘ y ‘longitud‘
- Extienda la interfaz existente ‘Ciudad‘ (sin modificarla en línea) agregando una propiedad ‘coords‘ de tipo ‘Coords‘
- Corregir lo que está mal con ‘tampa‘ */
function ejercicioVentintcuatro() {
    interface Coords {
        latitud: number;
        longitud: number;
    }
    // [NO EDITAR] (pretender que esto proviene de una version externa de la  biblioteca`foo.d.ts`)
    interface Ciudad {
        nombre: string;
    }
    // [/no editar] 
    interface Ciudad {
        coords: Coords;
    }
    const montreal = {
        coords: {
            latitud: 42.332,
            longitud: -73.324,
        },
        nombre: 'Montreal',
    };
    const tampa = {
        coords: {
            latitud: +'27.9478',
            longitud: +'-82.4584',
        },
        nombre: 'Tampa',
    };
    function informacionCiudad(ciudad: Ciudad) {
        const coords = `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
        return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
    }
    console.log('[Ejercicio 2.3]', `${informacionCiudad(montreal)}\n\n${informacionCiudad(tampa)}`);
}



/* === Ejercicio 25 ===
El propósito de este ejercicio es simplemente ilustrar el uso de ‘readonly‘: */
function ejercicioVentintcinco() {
    interface EsquemaUsuario {
        readonly id: number;
        nombre: string;
    }
    class Usuario implements EsquemaUsuario {
        constructor(public nombre: string, readonly id: number) { }
    }
    const usuario = new Usuario('Perro', 1);
}
