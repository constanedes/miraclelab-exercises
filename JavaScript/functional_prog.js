const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];


/* === Funcion Map ===
1. Obtener un arreglo de todos los nombres
2. Obtener un arreglo de todas las alturas
3. Obtener un arreglo de objetos con las propiedades de nombre y altura */
function functionMap() {
    const allNames = characters.map(e => e.name);
    const allHeights = characters.map(e => e.height);
    const namesAndHeights = characters.map(e => ({ name: e.name, height: e.height }));
}


/* === Función Reduce ===
1. Obtener la masa total de todos los personajes
2. Obtener la altura total de todos los caracteres
3. Obtener el número total de caracteres en todos los nombres de los personajes
4. Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar) */
function functionReduce() {
    const totalMass = characters.reduce((acc, curr) => acc + Number(curr.mass), 0);
    const totalHeight = characters.reduce((acc, curr) => acc + Number(curr.height), 0);
    const totalCharacters = characters.reduce((acc, curr) => acc + curr.name.length, 0);

    // ? devuelve un arreglo de objetos con el color de ojos y el número de caracteres de cada personaje
    const countChars = characters.map(({ eye_color }) => ({ [eye_color]: eye_color.length }));

    // ? reduce el arreglo anterior y devuelve obj con la suma los valores que tengan la misma clave
    const sumChars = countChars.reduce(function (acc, curr) {
        for (let key in curr) {
            acc[key] = (acc[key] || 0) + curr[key];
        }
        return acc;
    }, {});

    
    console.log(totalCharacters, totalMass, totalHeight, sumChars, countChars); // 52 346 712 {'blue': 8, yellow: 6, brown: 5}
}


/* === Función Filter === 
1. Obtener personajes con masa superior a 100
2. Obtener personajes con una altura inferior a 200
3. Obtener todos los personajes masculinos
4. Obtener todos los personajes femeninos */
function functionFilter() {
    const massOver100 = characters.filter(e => Number(e.mass) > 100);
    const heightUnder200 = characters.filter(e => Number(e.height) < 200);
    const maleCharacters = characters.filter(e => e.gender === 'male');
    const femaleCharacters = characters.filter(e => e.gender === 'female');

    console.log(massOver100, heightUnder200, maleCharacters, femaleCharacters);
}


/* === Función Sort === 
1. Ordenar por nombre
2. Ordenar por masa
3. Ordenar por altura
4. Ordenar por género */
function functionSort() {
    const sortedByName = characters.sort(a => a.name);
    const sortedByMass = characters.sort((a, b) => Number(a.mass) > Number(b.mass));
    const sortedByHeight = characters.sort((a, b) => Number(a.height) > Number(b.height));
    const sortedByGender = characters.sort((a, b) => a.gender > b.gender ? 1 : -1);

    console.log(sortedByName, sortedByMass, sortedByHeight, sortedByGender);
}




/* === Función Every ===
1. ¿Todos los personajes tienen ojos azules?
2. ¿Todos los personajes tienen una masa superior a 40?
3. ¿Todos los caracteres son más bajos que 200?
4. ¿Todos los personajes son hombres? */
function functionEvery() {
    const allBlueEyes = characters.every(e => e.eye_color === 'blue');
    const allMassOver40 = characters.every(e => Number(e.mass) > 40);
    const allHeightUnder200 = characters.every(e => Number(e.height) < 200);
    const allMales = characters.every(e => e.gender === 'male');

    console.log(allBlueEyes, allMassOver40, allHeightUnder200, allMales); // false true false false
}



/* === Función Some ===
1. ¿Hay al menos un personaje masculino?
2. ¿Hay al menos un personaje con ojos azules?
3. ¿Hay al menos un personaje más alto que 200?
4. ¿Hay al menos un personaje que tenga una masa inferior a 50? */
function functionSome() {
    const someMale = characters.some(e => e.gender === 'male');
    const someBlueEye = characters.some(e => e.eye_color === 'blue');
    const someVeryTall = characters.some(e => Number(e.height) > 200);
    const someLowMass = characters.some(e => Number(e.mass) < 50);

    console.log(someMale, someBlueEye, someVeryTall, someLowMass); // * true true true true
}


/* === Dado el siguiente arreglo ===
1. Mapealo a un arreglo de strings: firstName - lastName: role
2. Filtra aquellos usuarios con role de Full Stack Resident
3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
con los objetos usuarios que tienen dicho role
4. Genera una función de búsqueda de un usuario por firstName con find */
const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];


function extraFuntions() {
    const map = users.map(user => `${user.firstName} - ${user.lastName}: ${user.role}`);
    const filter = users.filter(user => user.role === 'Full Stack Resident');

    const reduce = users.reduce((acc, curr) => {
        acc[curr.role] = acc[curr.role] || [];
        acc[curr.role].push(curr);
        return acc;
    }, {});

    function buscarUsuario(firstName) {
        return users.find(user => user.firstName === firstName);
    }
}


/* Ejercicios adicionales
1. Implemente su propia función map
2. Implemente su propia función find
3. Implemente su propia función filter
4. Implemente su propia función reduce
*/

function myOwnMap (array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

function myOwnFind (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
}

function myOwnFilter (array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function myOwnReduce (array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

const testOne = myOwnMap(characters, e => e.name);
const testTwo = myOwnFind(characters, e => Number(e.mass) === 77);
const testThree = myOwnFilter(characters, e => e.eye_color === 'blue');
const testFour = myOwnReduce(characters, (acc, e) => acc += Number(e.mass), 0);

