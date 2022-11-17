
/* Tamagotchi
Se necesita desarrollar una clase que represente a un Tamagotchi, para esto se debe tomar en
cuenta las siguientes caracteristicas:
• nombre
• energía (1 a 100)
• sexo (F/M)
• sentido del humor (1 a 5)
• edad
Las acciones que puede realizar son:
• comer (aumenta la energia un 25%)
• dormir
• beber
• saltar (gasta un 25% de energia)
• correr
• caminar(gasta un 10% de la energia)
Si gasta toda la energia se muere, al igual que si come o bebe 5 veces seguidas.
Genere una clase que tenga una colección de Tamagotchis con métodos para agregar, eliminar y
buscar un Tamagochi */

/**
 * @description Class that represents a tamagotchi
 * @param {string} Name 
 * @param {number} Age 
 * @param {string} Gender 
 * @param {number} Humor_Sense
 * @param {number} Energy
 */

class Tamagotchi {
    private status: 'alive' | 'dead';
    private drinkCount: number;
    private foodCount: number;
    constructor(
        public name: string, 
        private energy: number = 100, 
        private gender: 'M' | 'F',
        private humorSense: number, 
        private age: number,
        
    ) {
        this.foodCount = 0;
        this.drinkCount = 0;
        this.status = 'alive';

        // * if it does not respect the range of values ​​in the instantiation, throws an error
        if (energy < 1.0 || energy > 100.0) {
            throw new RangeError('Energy must be between 1 and 100');
        }
        if (humorSense < 1 || humorSense > 5) {
            throw new RangeError('Humor sense must be between 1 and 5');
        }
    }
    
    //* checks if the tamagotchi is alive or declares it as dead and throws an error
    public checkStatus(): 'alive' | 'dead' {
        if (this.energy < 1 || this.foodCount > 4 || this.drinkCount > 4) {
            this.status = 'dead';
            throw new Error('I died. 😭');
        }
        return this.status;
    }

    //*  resets the counters when the tamagotchi doesn't eat or drink
    private resetCounts(): void {
        this.foodCount = 0;
        this.drinkCount = 0;
    }
    
    public eat(): number {
        this.checkStatus();
        this.foodCount++;
        this.drinkCount = 0;
        if (this.energy >= 100) {
            this.energy = 100;
            console.log('I can\'t eat I\'m full 😩');
        }
        else {
            this.energy += (this.energy * 0.25);
            const foods: string[] = ['🍰','🍔', '🍕', '🍩', '🍜', '🍣', '🍦', '🍟', '🍪', '🍫'];
            console.log('Yummy!', foods[Math.floor(Math.random() * foods.length)]);
        }
        return this.energy;
    }

    public sleep(): void {
        this.checkStatus();
        this.resetCounts();
        console.log('Zzzz... 😴');
        
    }

    public drink(): void {
        this.checkStatus();
        this.drinkCount++;
        this.foodCount = 0;
        const beverages: string[] = ['🍺', '🍻', '🍾', '🍷', '🍸', '🍹'];
        console.log('Glu, glu, glup', beverages[Math.floor(Math.random() * beverages.length)]);
    }

    public jump(): number {
        this.checkStatus();
        this.resetCounts();
        this.energy -= (this.energy * 0.25);
        console.log('Boing! ⏫');
        return this.energy;
    }

    public run(): void {
        this.checkStatus();
        this.resetCounts();
        console.log('Fiummm! 🏃');
    }

    public walk(): void {
        this.checkStatus();
        this.resetCounts();
        this.energy -= (this.energy * 0.10);
        console.log('Clap clap clap 🚶');
    }
}

/**
 * @description Creates a new Tamagotchi Collection
*/
class TamagotchiCollection {
    private tamagotchis: Tamagotchi[] = [];
    constructor() {
        this.tamagotchis = [];
    }
    public add(tamagotchi: Tamagotchi): void {
        this.tamagotchis.push(tamagotchi);
    }
    public remove(name: string): void {
        const tamagotchiIndex: number = this.tamagotchis.findIndex(tamagotchi => tamagotchi.name === name);
        if (tamagotchiIndex === -1) {
            throw new Error('Tamagotchi not found');
        }
        this.tamagotchis.splice(tamagotchiIndex, 1);
    }
    public find(name: string): Tamagotchi | undefined {
        return this.tamagotchis.find(tamagotchi => tamagotchi.name === name);
    }
}


//? Tests ============================================================
try {
    const myTamagotchi: Tamagotchi = new Tamagotchi('John Doe', 40, 'M', 4, 22);
    myTamagotchi.drink();
    myTamagotchi.drink();
    myTamagotchi.drink();
    myTamagotchi.drink();
    myTamagotchi.drink();
    myTamagotchi.walk(); // ! throws an error because the tamagotchi is dead
} 
catch (e) {
    console.log(e);
}

const tamagotchiCollection: TamagotchiCollection = new TamagotchiCollection();
tamagotchiCollection.add(new Tamagotchi('John Doe', 80, 'M', 2, 22));
tamagotchiCollection.add(new Tamagotchi('Jane Doe', 100, 'F', 4, 20));
tamagotchiCollection.remove('Jane Doe');
console.log(tamagotchiCollection.find('John Doe'));
console.log(tamagotchiCollection.find('Jane Doe')); // ! undefined, because it was removed
