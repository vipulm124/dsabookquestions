//You have 2 numbers represented by a linked list, where each note contains a single digit.. The digits are stored in reverse order, such that the 1's digit is t the head of the list. Write a function that adds the 2 numbers and returns the sum as LL
//EX
//Input: (7->1->6) + (5->9->2). That is, 617+295
//Output: 2->1->9. That is 912


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


function getNumberFromLL(myList) {
    
    let power = 0;
    let current = myList.head;
    let finalNo = 0;

    while (current !== null) {
        finalNo = (current.value * Math.pow(10, power)) + finalNo;
        current = current.next;
        power = power + 1;
    }
    return finalNo;
    
}

function getLLFromNumber(total) {
    
    var myFinalLL = new LinkedList();
    while (total > 0) {
        myFinalLL.addElem(total % 10);
        total = parseInt(total / 10);
    }
    return myFinalLL;
}


function getOutput(myList1, myList2) {
    let FN1 = getNumberFromLL(myList1);
    let FN2 = getNumberFromLL(myList2);

    let total = FN1 + FN2;

    console.log(total);
    var myFinalLL = getLLFromNumber(total);
    myFinalLL.display();

}

var myList = new LinkedList();
myList.addElem(7);
myList.addElem(1);
myList.addElem(6);

var myList2 = new LinkedList();

myList2.addElem(5);
myList2.addElem(9);
myList2.addElem(2);


myList.display();
myList2.display();

let FN1 = getNumberFromLL(myList);
console.log(FN1);


let FN2 = getNumberFromLL(myList2);
console.log(FN2);

getOutput(myList, myList2);