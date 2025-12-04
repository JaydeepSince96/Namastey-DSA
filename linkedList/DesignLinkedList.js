// Therory part:- Linked list is linear and non contageous data structure, Linked list is a series of nodes linked to each other.

/*
(1) Nodes:- Nodes have value and a Refrence (oftenly called pointer) to the next link
(2) Head and Tail:- Linked list start from head (the initial node) and end with tail (last node in the linked list)
(3) Usecase: Insertion and deletion process is very is cause we can add or delete node by their node reference.
(4) Not to Use: When you have to frequently fetch value of node so it is expesive run to fetch the value of node because you have to traverse each node to get the value of node unlike the Array.
*/

// creation of Node in Js
function Node(value) {
  this.value = value; // The value of node
  this.next = null; // Node memory reference
}

// creation of Linkedlist
function MyLinkedList() {
  this.head = null; // Head of the Linked List
  this.size = 0; // Size of Linkedlist
}

function AddAtHead(val) {
  let newNode = new Node(val); // created new node
  newNode.next = this.head; // created new node should point the head (reference)
  this.head = newNode; // head should point to the newly created Node, assign created newly node to the head
  this.size++; // and increase the size
}

/* 
  STEPS TO ADD NODE IN BETWEEN THE LINKS  

  (1) Create a new Node
  (2) Reach to the node where you have to insert the new node in my case I have to travel (i-1) 
  (3) Now This is a very crucial step in this step, we first started linking the newly created Node to the next one first
  for that we have to do newNode.next = curr.next
  (4) In this step we finally link from our newly created node link to it previous node for that we have to do
  curr.next = newNode
  (5) Handle the corner cases
  (6) Lastly just increase the size
*/

function AddAtIndex(val, index) {
   if (index < 0 || index >= this.size) return;
  let newNode = new Node(val);
  if (index == 0) {
    this.AddAtHead(val);
  } else if (index === this.size) {
    this.AddToTail(val);
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
}

function AddAtTail(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    // Corner cade what if linkedlist is empty
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      // in linkedlist while adding something at last we need to iterate each element to reach to the last one
      curr = curr.next; // here we go one by one node and assign the every current to the next node
    }
    curr.next = newNode; // and finally assign the current node (tail node) to newly created node that will be our tail node.
  }
  this.size++;
}

function GetAtIndex(index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
}

function DeleteAtIndext(index) {
  if (index < 0 || index >= this.size) return;

  if (index == 0) {
    // Corner case if we have to delete our first element
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    // curr.next = curr.next.next;
    if (curr && curr.next) { // It will make sure that curr is not null
      curr.next = curr.next.next;
    }
  }
  this.size--;
}
