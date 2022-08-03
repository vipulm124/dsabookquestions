//Implement a function to check if a linked list is pallindrome


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

function checkPallindrome(myList) {
    
}

var myList = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
myList.addElem(4);
myList.addElem(3);
myList.addElem(2);
myList.addElem(1);


myList.display();