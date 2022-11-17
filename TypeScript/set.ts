/* === Set ===
1. Verifique si hay duplicados en un arreglo de enteros usando Set.
2. Dados dos arreglos de enteros donde puede haber algunos valores duplicados entre los
mismos, devuelva un arreglo que tenga todos los elementos únicos de los dos arreglos
originales */

function setStructure(): void {
    const dupArr: number[] = [48, 23, 96, 77, 554, 96, 48, 77, 23, 33, 6, 554, 10];
    const dupArr2: number[] = [ 4, 77, 21, 76, 12, 77, 2, 23, 4, 999, 562, 9 ];

    const hasDuplicates = new  Set(dupArr).size !== dupArr.length
    const uniquesArray: number[] = [...new Set(dupArr), ...new Set(dupArr2)];

    console.log(hasDuplicates, uniquesArray);
}

setStructure();