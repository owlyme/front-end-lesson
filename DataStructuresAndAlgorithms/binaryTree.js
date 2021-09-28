class Node {
    left = null;
    right = null;
    constructor(props) {
        this.data = props
    }
    show () {
        console.log(this.data)
    }
}


class BST {
    root = null;
    insert (data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            let parent = null;
            while(currentNode) {
                parent = currentNode;

                if (currentNode.data > data) {
                    currentNode = currentNode.left
                    if (!currentNode) {
                        parent.left = newNode
                    }
                } else {
                    currentNode = currentNode.right
                    if (!currentNode) {
                        parent.right = newNode
                    }
                }
            }
        }
    }

    insert1 (data, root) {
        if (!this.root) {
            this.root = new Node(data)
            return this.root
        }
        let currentRoot = root || this.root;

        if (currentRoot.data > data) {
            if (!currentRoot.left) {
                currentRoot.left = new Node(data)
            } else {
                this.insert(data, currentRoot.left)
            }
        } else if (currentRoot.data < data) {
            if (!currentRoot.right) {
                currentRoot.right = new Node(data)   
            } else {
                this.insert(data, currentRoot.right)
            }
        }
    }

    inOrder (node) {
        if (node) {
            this.inOrder(node.left)
            node.show()
            this.inOrder(node.right)
        }
    }

    preOrder(node) {
        if (node) {
            node.show()
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    posterOrder(node) {
        if (node) {
            this.preOrder(node.left)
            this.preOrder(node.right)
            node.show()
        }
    }

    getMin () {
        let current  = this.root;
        while(current.left) {
            current = current.left
        }
        return current.data
    }

    getMax () {
        let current = this.root;
        while(current.right) {
            current = current.right
        }
        return current.data
    }

    find (data) {
        let current = this.root

        while(current && current.data !== data) {
            if (current.data > data) {
                current = current.left
            } else {
                current = current.right
            }
        }   

        return current
    }
    getSmallestNode(nood) {
        let current  = nood;
        while(current.left) {
            current = current.left
        }
        return current
    }
    remove(data) {


        function removeNode(node, data) {
            if (!node) {
                return null
            }

            if (data === node.data) {
                if (!node.left && !node.right ) {
                    return null;
                } else if (!node.left) {
                    return node.right
                } else if (!node.right) {
                    return node.left;
                }

                const tempNode = this.getSmallestNode(node.right);
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data)
               
            } else if (data < node.data) {
                node.left = removeNode(node.left, data)
            } else {
                node.right = removeNode(node.right, data)
            }

            return node 
        }   

        this.root = removeNode(this.root, data)
    }


    display(){
        console.log(JSON.stringify(this.root, null, 2))
    }
}


const bst = new BST();
bst.insert(4);
bst.insert(3);
bst.insert(6);
bst.insert(5);
bst.insert(0);


// console.log(bst.remove(6))
bst.remove(6)

bst.display(bst.root)
// 23 16 3 22 45 37 99