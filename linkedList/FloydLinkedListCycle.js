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

// helper: make last.next point to node at position `pos` (0-based).
// if pos === -1 -> no cycle
function makeCycle(head, pos) {
  if (pos < 0) return head;
  let tail = head;
  let target = null;
  let i = 0;
  while (tail.next) {
    if (i === pos) target = tail;
    tail = tail.next;
    i++;
  }
  // check final node when pos === last index
  if (i === pos) target = tail;
  tail.next = target;
  return head;
}

/*
    THIS ALGORITH ALSO KNOWN AS FLOYD'S ALGORITH OR OFTENLY KNOWN AS SLOW AND FAST POINTER ALGORITHM
    
    Theroy:-If two pointer one is slow and fast (let's assume running with 2x then the slow one) running in a
    cycle then at some point slow and fast will be at the same position
*/

function FloydLinkedListCycle(head){
  if(!head)return false;
  let slow = head
  let fast = head.next
  while(slow !== fast){
    if(fast === null || fast.next === null){
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

// Build list and create cycle: last node -> node at index 1
let head = buildLinkedList([1,2]);
makeCycle(head, -1);    // now there is a cycle: -4 -> 2
console.log(FloydLinkedListCycle(head)); // false

// Time complexcity O(n) space complexity is O(1)