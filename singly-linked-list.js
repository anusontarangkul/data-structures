class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(val) {
        if (this.head === null) {
            this.head = new Node(val)
            return
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val)
        return
    }
    print() {
        let str = ''
        let curr = this.head;
        while (curr !== null) {
            str += curr.val + '->';
            curr = curr.next;
        }
        console.log(str)
    }
    contains(value) {
        let curr = this.head;
        while (curr.next !== null) {
            if (curr.val === value) return true
            curr = curr.next;
        }
        return false
    }

}



const list = new LinkedList();
list.append('a');
list.append('b');


const deleteValue = (head, target) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        console.log(curr.val)
        curr = curr.next;
    }
}

deleteValue('a', "c")