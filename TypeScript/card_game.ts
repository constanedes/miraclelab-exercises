
/* Juego de cartas
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.
1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo
2. Las cartas que saca cada jugador deben salir en orden aleatorio */

interface IPlayerModel {
    player: string;
    card: number | string;
}

/**
 * Enum with the cards values and their names
*/
enum Cards {
    Ace = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King 
}

/**
 * Game that returns the player with the highest card
 * @param {List} players List of players
 * @returns {string} List of players and their cards
 *
*/
class CardGame  {
    private deck: string[]; 
    private playersAndCards: IPlayerModel[];
    private playersCopy: string[];

    constructor(private players: string[]) {
        
        //? fill the deck with the number of the cards in string format
        this.deck =  Object.keys(Cards).filter((v) => !isNaN(Number(v)));
        this.playersCopy = players.slice();
        this.playersAndCards = [];

        if (this.players.length > this.deck.length) {
            throw new Error('The number of players is greater than the number of cards');
        }
    }

    public takeCard(): void {
        this.evalPlayerCards();
        const cardIndex = Math.floor(Math.random() * this.deck.length);
        const cardRemoved = this.deck[cardIndex];

        this.playersAndCards.push({
            player: this.playersCopy[0],
            card: cardRemoved
        }); 
        console.log(`${this.playersCopy[0]} took the card ${cardRemoved}`);
        //?  delete the player from the queue to take card and the card taken
        this.playersCopy.shift();
        this.deck.splice(cardIndex, 1);   
    }

    private evalPlayerCards(): IPlayerModel[] | string { 
        if (this.playersCopy.length === 0) {

            //? get the highest card
            const winner = this.playersAndCards.reduce((acc, curr) => {
                if (Number(curr.card) > Number(acc.card)) {
                    return curr;
                }
                return acc;
            }).player;
            console.info(`The winner is ${winner}`);

            return this.playersAndCards;
        }
        else {
            return `Players not taken all the cards`;
        }
    }

    play(): void {
        while (this.playersCopy.length > 0) {
            this.takeCard();
        }
        this.evalPlayerCards();
    }
}
    
const cardGameOne: CardGame = new CardGame(['Juan', 'Pedro', 'Ana']);
cardGameOne.play();

