export default class CStack {
    private storage: any;
    private count: number;

    constructor() {
        this.storage = {};
        this.count = 0;
    }

    get size(): number {
        return this.count;
    }

    get values(): any[] {
        return Object.values(this.storage);
    }

    push(val: any): void {
        this.storage[this.count] = val;
        this.count++;
    }

    pop(): any {
        if (this.count === 0) {
            return undefined
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek(): any {
        return this.storage[this.count - 1];
    }
}