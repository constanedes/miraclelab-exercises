
import CircularQueue from "./circular_queue";

/**
 * @class HotPotato
 * @description Class that implements a hot potato game
 * @param {number} capacity - The number of players
 */


 class HotPotato extends CircularQueue<string> {
    constructor(capacity: number) {
        super(capacity);
    }

    public play(): void {
        let winner: string;
        while (this.size() >= 1) {
            for (let i = 0; i < this.size() - 1; i++) {
                this.enqueue(this.dequeue() as string);
            }
            winner = this.dequeue()!;
            console.log(`${winner} is eliminated!`);
        }
        console.log(`${winner!} wins!`);
    }
} 


// ======= Test ==========
let playerNames = ["John", "Jack", "Ingrid", "Carl"];

const hotPotatoGame: HotPotato = new HotPotato(playerNames.length);

// the players are shuffled and added to the game queue
playerNames.sort(function() {
    return 0.5 - Math.random();
})
.forEach(player => hotPotatoGame.enqueue(player));

hotPotatoGame.play();
