//Supppose the digists astr tored in forward order. Repeat problen in 4a
///Eg
//Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617+295
//Output: 9 -> 1-> 2. That is 912





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
        finalNo = (finalNo * 10) + current.value;
        current = current.next;
        power = power + 1;
    }
    return finalNo;
    
}

function getLLFromNumber(total) {
    //eg total = 912
    let count = 0;

    var myFinalLL = new LinkedList();
    var digits = total.toString().split('');
    for (i = 0; i < digits.length; i++){
        myFinalLL.addElem(digits[i]);
    }
   
    
    return myFinalLL;
}


function getOutput(myList1, myList2) {
    let FN1 = getNumberFromLL(myList1);
    let FN2 = getNumberFromLL(myList2);

    console.log(FN1);
    console.log(FN2);
    let total = FN1 + FN2;

    console.log(total);
    var myFinalLL = getLLFromNumber(total);
    myFinalLL.display();

}

var myList = new LinkedList();
myList.addElem(6);
myList.addElem(1);
myList.addElem(7);

var myList2 = new LinkedList();

myList2.addElem(2);
myList2.addElem(9);
myList2.addElem(5);


myList.display();
myList2.display();

// let FN1 = getNumberFromLL(myList);
// console.log(FN1);


// let FN2 = getNumberFromLL(myList2);
// console.log(FN2);

getOutput(myList, myList2);