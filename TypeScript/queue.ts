/* 
- Implemente una cola utilizando clases. Incorpore los métodos enqueue, dequeue y size
*/

class Queue {
    private node: number[] = [];
    private front: number = 0;
    private end: number = 0;

    public enqueue(data: number): void {
        this.node[this.end] = data;
        this.end++;
    };

    public dequeue(): number | null {
        if (this.front === this.end) {
            return null;
        };
        let data = this.node[this.front];
        delete this.node[this.front];
        this.front++;
        return data;
    };

    public size(): number {
        return this.end - this.front;
    };

    public print(): string | null { 
        if (this.size() === 0) {
            return null;
        };
        let result: string = '';
        for (let i = 0; i < this.end; i++) {
            result += this.node[i] + " ";
        };
        return result;
    }
}


//* Queue Tests 
const queue = new Queue();
queue.enqueue(1);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.size());
console.log(queue.print());

