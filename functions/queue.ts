export default class CQueue {
    private storage: any[];

    constructor() {
        this.storage = [];
    }

    get size(): number {
        return this.storage.length;
    }

    get values(): number[] {
        return [...this.storage];
    }

    enqueue(val: any): void {
        this.storage.push(val);
    }

    dequeue(): any {
        return this.storage.shift();
    }

    peek(): any {
        return this.storage[0];
    }

    isEmpty(): boolean {
        return this.storage.length === 0;
    }
}