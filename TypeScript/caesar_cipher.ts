/* Algoritmo de Julio Cesar
1. Armar un programa que realice la codificación y decodificación de una cadena utilizando
para ello el método de Julio Cesar. Dicho algoritmo consiste en correr una cantidad de
caracteres determinado hacia la derecha un mensaje dado.
Ejemplo:
La transformación se puede representar alineando dos alfabetos; el alfabeto cifrado es
un alfabeto normal que está desplazado un número determinado de posiciones hacia la
izquierda o la derecha. Por ejemplo, aquí el cifrado César está usando un desplazamiento
de seis espacios hacia la derecha:
• Texto original: ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
• Texto codificado: GHIJKLMNÑOPQRSTUVWXYZABCDEF
Para codificar un mensaje, simplemente se debe buscar cada letra de la línea del texto
original y escribir la letra correspondiente en la línea codificada. Para decodificarlo se
debe hacer lo contrario.
• Texto original: WIKIPEDIA, LA ENCICLOPEDIA LIBRE
• Texto codificado: CÑPÑVKJÑG, QG KSIÑIQUVKJÑG QÑHXK
Armar un algoritmo de codificación inventado por el primo de Julio Cesar que además de
la codificación anterior invertía el String final. Armar un bloque de código de prueba.
2. Reutilizando el codigo anterior, implemente un algoritmo similar, que antes de aplicar la
codificacion de Julio César invierta el texto original */


interface Encoder {
    encode(message: string): string;
    decode(message: string): string;
}

/**
 * Function that encodes a string using the Caesar cipher
*/
class CaesarEncoder implements Encoder {
    private alphabet: string[];
    private _shift: number;

    constructor() { 
        this.alphabet =  [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];
        this._shift = 1;
    }

    public set shift(shift: number) {
        this._shift = shift;
    }

    public encode(message: string): string {
        //* create a copy of the message converted to uppercase and split it into an array
        const processedMsg: string[] = [...message.toUpperCase()];
        //* iterate over the processed message and search each letter in the alphabet
        const encodedMessage: string[] = processedMsg.map(letter => {

            const index: number = this.alphabet.indexOf(letter);
            //? if the letter is not in the alphabet return the letter, otherwise return the letter shifted
            if (index !== -1) {
                return this.alphabet[(index + this._shift) % this.alphabet.length];
            }
            return letter;
        });
        //* returns all letters joined
        return encodedMessage.join('');
    }

    public decode(message: string): string {
        const processedMsg: string[] = message.toUpperCase().split('');
        for (let i = 0; i < processedMsg.length; i++) {
            const index: number = this.alphabet.indexOf(processedMsg[i]);
            if (index !== -1) {
                processedMsg[i] = this.alphabet[(index - this._shift) % this.alphabet.length];
            }
        }
        return processedMsg.join('');
    }
}

/**
 * @description Same as CaesarEncoder but it reverses the message
 * @extends CaesarEncoder
*/
class CaesarCousinEncoder extends CaesarEncoder {

    constructor() {
        super();
    }
    public encode(message: string): string {
        const invertedMessage: string[] = [...message].reverse();
        return super.encode(invertedMessage.join(''));
    }
    public decode(message: string): string {
        const invertedMessage: string[] = [...message].reverse();
        return super.decode(invertedMessage.join(''));
    }

} 


//? Tests ============================================================
const caesarCipher: CaesarEncoder = new CaesarEncoder();
const caesarCousinCipher: CaesarCousinEncoder = new CaesarCousinEncoder(); 
caesarCousinCipher.shift = 6;
console.log(`Codificado: ${caesarCousinCipher.encode('WIKIPEDIA, LA ENCICLOPEDIA LIBRE')}`);
console.log(`Decodificado: ${caesarCousinCipher.decode('CÑPÑVKJÑG, QG KSIÑIQUVKJÑG QÑHXK')}`);


