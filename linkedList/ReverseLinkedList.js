function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function buildLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

function ReverseLinkedList(head){
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

let head = buildLinkedList([1,2,3,4,5]);
let result = ReverseLinkedList(head);

console.log(result);   // prints the reversed linked list (Node structure)
