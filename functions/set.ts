export default class CSet {
    private storage: number[];
    private count: number;
    constructor() {
        this.storage = [];
        this.count = 0;
    }

    push(val: number) {
        this.storage[this.count] = val;
        this.count++;
    }

    pop(): number | undefined {
        if (this.count === 0) {
            return undefined
        }

        this.count--;
        const result = this.storage[this.count];
        this.storage.splice(-1, 1);
        return result;
    }

    peek(): number {
        return this.storage[this.count - 1];
    }

    get size(): number {
        return this.count;
    }

    get elements(): number[] {
        return [...this.storage];
    }
}