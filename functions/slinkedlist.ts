class Node {
    public value: any;
    public next: any;

    constructor(value: any, next: any = null) {
        this.value = value;
        this.next = next;
    }
}

export default class CSingleLinkedList {
    private start: Node | null;
    private count: number;

    constructor() {
        this.start = null;
        this.count = 0;
    }

    get size(): number {
        return this.count;
    }

    get head(): Node | null {
        return this.start;
    }

    get values(): any[] {
        let valuesList: any = [];
        let currentNode = this.start;
        while (currentNode) {
            valuesList.push(currentNode?.value);
            currentNode = currentNode.next;
        }
        return valuesList;
    }

    add(val: any): void {
        let newNode = new Node(val);
        if (this.start === null) {
            this.start = newNode;
        } else {
            let currentNode = this.start;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.count++;
    }

    remove(val: any): boolean {
        let currentNode = this.start;
        let previousNode = null;

        if (currentNode?.value === val) {
            this.start = currentNode?.next;
            this.count--;
            return true;
        } else {
            while (currentNode && currentNode?.value !== val) {
                previousNode = currentNode;
                currentNode = currentNode?.next;
            }

            if (previousNode && currentNode?.value === val) {
                previousNode.next = currentNode?.next;
                this.count--;
                return true;
            }
        }
        return false;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }
}