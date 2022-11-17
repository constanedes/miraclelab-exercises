/*
- Implemente una pila utilizando clases. Agregue los metodos push, pop y size

- Utilice la clase anterior para convertir numeros decimales en binarios. Recuerde que para
convertir un número decimal en una representación binaria, podemos dividir el número
por 2 (el binario es un sistema numérico de base 2) hasta que el resultado de la división sea 0

- Podemos modificar el algoritmo anterior para que funcione como un conversor de decimales
a las bases entre 2 y 36. En lugar de dividir el número decimal por 2, podemos pasar la
base deseada como argumento al método y usarla en las operaciones de división
*/

class Stack {
    private top: number = 0;
    private node: number[] = [];

    public push(data: number): void {
        this.top++;
        this.node[this.top] = data;            
    };

    public pop(): number | null {        
        let deletedData;
        if(this.top > 0) {
            deletedData = this.node[this.top];
            delete this.node[this.top];
            this.top--;
            return deletedData;
        }
        return null;
    };

    public print(): string {
        let result: string = '';
        for (let i = this.top; i > 0; i--) {
            result += this.node[i] + ' ';         
        }
        return result;
    };

    public size(): number {
        return this.top;
    };

    public convertToBinary(): number[]  { 
        return this.convertToBase(2);
    }

    //? converts node to a base between 2 and 36 using the toString method
    public convertToBase( base: number): number[] {

        if (base < 2 || base > 10){
            throw new Error('Base must be between 2 and 10');
        } 
        let result: number[] = [];
        let current: number = this.top;
        while (current > 0) {
            result.push(Number(this.node[current].toString(base)));
            current--;
        }
        return result;
    }
};


const stack = new Stack();
//* Test Stack
const objStack: Stack = new Stack();
objStack.push(8);
objStack.push(2048);
objStack.push(4);
const customBase = objStack.convertToBase(10);
const binary = objStack.convertToBinary();
