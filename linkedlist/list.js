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

    // // TODO add at key
    addAt(position,value){

        if (this.head === null || position == 1) {this.addToHead(value);return;}

        let current = this.head;
        let node = new Node(value);
        let i = 2,tmp = null;

        while(i<position && current.next != null){
            current = current.next;
            i++;
        }

        tmp = current.next;
        current.next = node;
        node.next = tmp;

    }

    // TODO remove last
    removeLast(){
        let current = this.head;

        while(current.next.next != null) current = current.next;
        let tmp = current.next;
        current.next = null;

        return tmp; // ?! Ammm node mazal fi lmemory
    }
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

let list = new List();

list.addToEnd(9)
list.addToEnd(3)
list.addToEnd(8)
list.addToEnd(2)

list.addToHead(12)
list.addAt(3,44)

list.removeLast();

list.displayList();