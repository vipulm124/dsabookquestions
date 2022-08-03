//Implement a function to check if a linked list is pallindrome

//METHOD2 - reverse the 2nd half of LL and match it with the first half

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


function getMidPoint(myList) {
    var slowPtr = myList.head;
    var fastPtr = myList.head;
    let midPt = null;

    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    //odd length    
    if (fastPtr != null) {
        midPt = slowPtr;
        slowPtr = slowPtr.next;
    }
    var secondHf = slowPtr;

    console.log(slowPtr.value);
    // console.log(fastPtr.value);
    return secondHf;
    
}



function checkPallindrome(myList) {
    var secondHf = getMidPoint(myList);

    var prev = null;
    var current = secondHf;
    var next = null;

    while (current != null) {
        next = current.next;
    }
    
}

var myList = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
// myList.addElem(4);
myList.addElem(3);
myList.addElem(2);
myList.addElem(1);


myList.display();
getMidPoint(myList);
myList.display();