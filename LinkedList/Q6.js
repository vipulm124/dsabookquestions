//Intersection: Given 2 singly LL, determine if the 2 lists intersect. Return the intersecting node. Node that is intersection is defined based on reference, not value. That is, if the Kth node of the first LL is the exact same node(by reference) as the jth node of the 2nd LL, then they are intersecting



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
        this.length++;
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
}

//in this function, the myList if the bigger LL, lenDiff is the current node of LL and myList2 is the smaller LL
function getNode(myList,lenDiff, myList2) {
    
    // myList2.display();
    // console.log("PRINTING HEAD");
    let node = myList.head;
    let current = myList2.head;

    for (i = 0; i < lenDiff; i++){
        node = node.next;
    }    
    // console.log(node.value);
    while (node !== null && current !== null) {
        // console.log(current.value);
        if (current === node) {
            return node;
        }
        else {
            current = current.next;
            node = node.next;
        }
    }
}

function checkInteraction(myList, myList2) {

    //get difference of length
    let len1 = getLength(myList);
    let len2 = getLength(myList2);

    var ptr = len1 > len2 ? myList.head : myList2.head;
    var lenDiff = len1 > len2 ? len1 - len2 : len2 - len1;

    let outputNode = null;
    if (len1 > len2) {
        outputNode = getNode(myList, lenDiff, myList2);
    }
    else {
        outputNode = getNode(myList2, lenDiff, myList);        
}    

    return outputNode;    
    
    
}

function getLength(myList) {
    let len = 0
    if (myList.head === null) {
        return len;
    }
    else {
        let current = myList.head;
        while (current !== null) {
            len = len + 1;
            current = current.next;
        }
    }
    return len;
}

var myList = new LinkedList();

var myList2 = new LinkedList();
myList.addElem(1);
myList.addElem(2);
myList.addElem(3);
myList.addElem(4);

myList2.addElem(6);
myList2.addElem(7);

var newNode1 = new Node(5);
myList.addNode(newNode1);

var newNode2 = new Node(9);
myList.addNode(newNode2);
// myList2.addNode(newNode2);

var newNode3 = new Node(10);
myList.addNode(newNode3);
// myList2.addNode(newNode3);

var newNode4 = new Node(11);
myList.addNode(newNode4);
// myList2.addNode(newNode4);

myList2.addNode(newNode1);

myList.display();
myList2.display();

// console.log(myList.length);
// console.log(getLength(myList2));


let node = checkInteraction(myList, myList2);
if (node === undefined) {
    console.log("NO INTERSECTION NODE PRESENT");    
}
else
{

console.log(node.value);
}    