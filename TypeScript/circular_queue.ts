/**
 * @class CircularQueue
 * @description Class that implements a circular queue
 * @param {number} capacity - The size of the queue
 * @method enqueue - Adds an element to the queue
 * @method dequeue - Removes an element from the queue
 * @accepts number | string | object elements 
 */

export default class CircularQueue<T extends number | string | object> { 
    protected items: T[];
    private front: number = -1;
    private rear: number = -1;
    private currentLength: number = 0;
    private capacity: number;

    constructor(capacity: number) {
        this.items = new Array(capacity);
        this.capacity = capacity;
    }

    private isFull(): boolean {
        return this.currentLength === this.capacity;
    }

    private isEmpty(): boolean {
        return this.currentLength === 0;
    }

    public size(): number {
        return this.currentLength;
    }

    public enqueue(item: T): void {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = item;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    public dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        const item: T = this.items[this.front];
        delete this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    public print(): void {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

// ======= Test ==========
const cq: CircularQueue<number> = new CircularQueue<number>(3);

cq.enqueue(20);
cq.enqueue(30);
console.log(cq.dequeue());
cq.enqueue(40);
console.log(cq.size());
cq.print();



