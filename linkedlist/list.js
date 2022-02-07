class Node {
    constructor(data) {
        this.data = data;
        this.next = null;                
    }
}

class List {
    constructor(head = null) {
        this.head = head
    }

    // // TODO display list
    displayList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    // // TODO get last node
    getLastNode(){
        let current = this.head;
        if(current == null) return this.head;
        while(current){
            if (current.next == null) return current;
            current = current.next;
        }
    }

    // // TODO add last
    addToEnd(value){
        let node = new Node(value);
        let lastNode = this.getLastNode();
        if(lastNode == null) this.head = node;
        else lastNode.next = node;
    }

    // // TODO add first
    addToHead(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    // TODO add at key
    // TODO remove last
    // TODO remove first
    // TODO remove at key
    // TODO size
    // TODO get first 
    // TODO get at
    // TODO reverse 
    // TODO clear
    // TODO search
    // TODO sort
    // TODO index of an element
    
}

// let n1 = new Node(3);
// let n2 = new Node(7);
// let n3 = new Node(4);
// console.log(n1.data);

// n1.next = n2;
// n2.next = n3;

let list = new List();
list.addToEnd(9)
list.addToEnd(3)
list.addToEnd(8)
list.addToEnd(2)
list.addToHead(12)

list.displayList();
// console.log(list.getLastNode());

