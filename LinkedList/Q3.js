//Delete middle node - Implement an algo to delete a node in the middle(i.e. any node but the first and last node, not necessariliy the exact middle) of a single liked list, given only access to that node

//EXAMPLE
// i/P: The node c from the linked list a->b->c->d->e->f
//Result: nothing is returned, but the new linked list looks like a->b->d->e->f


class Node{

    constructor(value) {
        this.value = value;
        this.next = null;        
    }    
}



class LinkedList{

    constructor() {
        this.head = null;
        this.length = 0
    }

    addElem(value) {
        var newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
           let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let final = '';
        let current = this.head;
        final = current.value;
        console.log("Printing LL");
        while (current.next !== null) {
            final += '->' + current.next.value;
            current = current.next;
        }

        console.log(final);
}    
}

function deleteNode(myList, node) {
    
    var current = myList.head;
    var previousNode = myList.head;

    while (current !== null) {
        if (current.value !== node.value) {
            previousNode = current;
            current = current.next;
        }
        else {
            previousNode.next = current.next;
            current = current.next;
        }
    }
}

var myList = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
myList.addElem(4);
myList.addElem(5);
myList.addElem(6);
myList.addElem(7);
myList.addElem(8);
myList.addElem(9);


myList.display();

var newNode = new Node(5);
deleteNode(myList, newNode);
myList.display();
