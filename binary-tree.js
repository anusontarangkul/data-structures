// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 1
    }

    size() {
        return this.count
    }

    insert(value) {
        this.count++

        let newNode = new Node(value)

        const searchTree = node => {
            // if value < node.value, go left
            if (value < node.value) {
                // check for no left child, append node
                if (!node.left) {
                    node.left = newNode
                    // if left child, look left again
                } else {
                    searchTree(node.left)
                }
            }
            // if value > node.value, go right
            else if (value > node.value) {
                // if no right child, append new node
                if (!node.right) {
                    node.right = newNode
                    // if right child, look right again
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min() {
        let currentNode = this.root

        // traverse left until no more children
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    max() {
        let currentNode = this.root

        // traverse right until no more children
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value

    }

    contains(value) {
        let currentNode = this.root

        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false
    }

    // depth first (branch by branch)

    // in-order
    // left, root, right
    dfsInOrder() {
        let result = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            result.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return result
    }

    // pre-order
    // root, left, right
    dfsPreOrder() {
        let result = []
        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    //post-order
    // left, right, root
    dfsPostOrder() {
        let result = []
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }

    // breadth first search (level by level)
    // use que
    bfs() {
        let result = []
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.bfs())