//Implement a function to check if a linked list is pallindrome


///METHOD 1 - Using a STACK
//Step1 - get the length of the LL
// Push first half in STACK
// iterate through remaining LL and check with each element of the stack's pop


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
    let len = getLLLength(myList);

    var stk = [];
    let current = myList.head;
    for (i = 0; i < parseInt(len / 2); i++){
        stk.push(current.value);
        current = current.next;
    }
    //odd length, skip current node
    if (len > (i * 2)) {
        current = current.next;
    }

    while (current != null) {
        if (current.value !== stk.pop()) {
            return "NOT PALLINDROME";
        }
        current = current.next;
    }

    return "PALLINDROME";
    
}

function getLLLength(myList) {
    let length = 0;
    let current = myList.head;

    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

var myList = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
myList.addElem(4);
myList.addElem(7);
myList.addElem(4);
myList.addElem(3);
myList.addElem(2);
myList.addElem(1);


myList.display();
let len = getLLLength(myList);
console.log("Length of LL: ", len);

let res = checkPallindrome(myList);
console.log(res);