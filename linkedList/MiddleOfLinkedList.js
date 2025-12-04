// 

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Create a linked list from an array:

function buildLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Now test middle node

function MiddleOfLinkedList(head){
let slow = head
let fast = head
while(fast != null && fast.next != null){
    slow = slow.next
    fast = fast.next.next
}
return slow
}

let head = buildLinkedList([1,2,3,4,5]);
let result = MiddleOfLinkedList(head)
console.log(result)