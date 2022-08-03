//Loop detection - Given a circular LL, implement an algo that returns the node at the begining of the Loop
//Eg.
//Input:  A -> B -> C -> D -> E -> C (the same C as earlier)
//Output: C


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

       addNode(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
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

makeLoop() {
    var ptr1 = this.head;
    var ptr2 = this.head;

    while (ptr1.next !== null) {
        ptr1 = ptr1.next;
    }

    while (ptr2.value !== 'C') {
        ptr2 = ptr2.next;
    }

    ptr1.next = ptr2;


       }    

    getLoopNode() {
        var slowPtr = this.head;
        var fastPtr = this.head;

        while ((slowPtr === this.head && fastPtr === this.head) || fastPtr !== slowPtr) {
            console.log("loops are not same yet");
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }
        //intersection is found
        //shift slowPtr to head and move fastPtr one step at a time til they are same
        slowPtr = this.head;
        while (slowPtr !== fastPtr && (slowPtr !== null && fastPtr !== null)) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next;
        }
        if (slowPtr === null) {
            console.log("There is no intersection");
        }
        else {
            console.log("Intersection loop's value is ", slowPtr.value);
        }


}    
    
}

var myList = new LinkedList();
myList.addElem('A');
myList.addElem('B');

myList.addElem('C');
myList.addElem('D');
myList.addElem('E');


myList.display();
myList.makeLoop();
// myList.display();
myList.getLoopNode();
console.log("End of code");