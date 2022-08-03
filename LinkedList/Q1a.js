//Write code to remove duplicates from an unsorted linked list

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

function removeDups(myList) {
    var hs = new Set();
    let current = myList.head;
    var previousNode = null;
    while (current != null) {
        //if item already exist in dictionary
        if (hs.has(current.value)) {
            previousNode.next = current.next;
            current = current.next;
        }
        else {
            hs.add(current.value);
            previousNode = current;
            current = current.next;
        }
    }
    
    
}

var myList = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
myList.addElem(4);
myList.addElem(3);
myList.addElem(5);


myList.display();


removeDups(myList);
myList.display();


