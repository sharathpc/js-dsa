export default class CSet {
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

    has(val: any): boolean {
        return this.storage.includes(val);
    }

    add(val: any): boolean {
        if (!this.has(val)) {
            this.storage.push(val);
            return true;
        }
        return false;
    }

    remove(val: any): boolean {
        if (this.has(val)) {
            const valIndex = this.storage.indexOf(val);
            this.storage.splice(valIndex, 1);
            return true;
        }
        return false;
    }
}