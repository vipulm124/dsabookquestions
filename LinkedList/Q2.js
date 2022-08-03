//Implement an algo to find the kth to last element of a singly linked list

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

function getKthElement(myList, k) {
    
    var ptr1 = myList.head;
    for (i = 1; i < k; i++){
        ptr1 = ptr1.next;
    }

    console.log(ptr1.value);
    var ptr2 = myList.head;

    while (ptr1.next !== null) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    console.log(ptr2.value);
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

getKthElement(myList, 5);