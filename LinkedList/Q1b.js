//Write code to remove duplicates from an unsorted linked list
//How would you solve this problem is a temp buffer is not allowed

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


function removeDuplicate(myList) {
    var ptr1 = null;
    var dup = null;

    var current = myList.head;

    while (current !== null) {
        
        ptr1 = current;

        while (ptr1.next != null) {
        
            if (current.value === ptr1.next.value) {
                dup = ptr1.next;
                ptr1.next = ptr1.next.next;
            }
            else {
                ptr1 = ptr1.next;    
        }    
        }
        current = current.next;    

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

removeDuplicate(myList);
myList.display();

