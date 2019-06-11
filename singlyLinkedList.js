{
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }

    class SingleLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        push(val) {
            var newNode = new Node(val)
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
        pop() {
            if (!this.head) return undefined
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
        shift() {
            if (!this.head) return undefined
            var current = this.head;
            this.head = current.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return current;
        }
        unshift(val) {
            var newNode = new Node(val)
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }

        get(index) {
            if (index < 0 || index >= this.length) return null;
            var counter = 0;
            var current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }

        set(index, val) {
            var update = this.get(index);
            if (update) {
                update.val = val;
                return true;
            }
            return false;
        }

        insert(index, val) {
            if (index < 0 || index >= this.length) return false;
            else if (index === this.length) this.push(newNode);
            else if (index === 0) this.unshift(newNode);
            else {
                var foundNode = this.get(index - 1);
                var newNode = new Node(val);
                newNode.next = foundNode.next;
                foundNode.next = newNode;
            }
            this.length++;
            return true;
        }

        remove(index) {
            if (index < 0 || index >= this.length) return undefined;
            else if (index === this.length) return this.pop();
            else if (index === 0) return this.shift();
            else {
                var foundNode = this.get(index - 1);
                var ret = foundNode.next;
                foundNode.next = ret.next;
            }
            this.length--;
            return ret;
        }

        reverse() {
            var node = this.head;
            this.head = this.tail;
            this.tail = node;
            var previous = null;
            var next = null;
            for (var i = 0; i < this.length; i++) {
                next = node.next;
                node.next = previous;
                previous = node;
                node = next;
            }
            return this;
        }
    }

    var list = new SingleLinkedList();
    list.push("Hello");
    list.push("Goodbye");
    list.push("!");
    list.push("<3");
    list.push(":)");

    list.remove(2);
}