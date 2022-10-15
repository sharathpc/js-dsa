export default class CPriorityQueue {
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

    enqueue(value: any, priority: number): void {
        const node = { value, priority };
        let nodeAdded: boolean = false;

        for (let i = 0; i < this.storage.length; i++) {
            let eItem = this.storage[i];
            if (priority < eItem.priority) {
                this.storage.splice(i, 0, node);
                nodeAdded = true;
                break;
            }
        }

        if (!nodeAdded) {
            this.storage.push(node);
        }
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