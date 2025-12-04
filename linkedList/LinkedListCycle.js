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
Hash set always store unique values means It something is repeated It will still store the value only one time 
It is very optimal in order to search something from it will always give you time complexity of O(1)
 */

function LinkedListCycle(head){
  const seenLink = new Set();
  let curr = head;
  while (curr) {
    if (seenLink.has(curr)) return true;
    seenLink.add(curr);
    curr = curr.next;
  }
  return false;
}

// Build list and create cycle: last node -> node at index 1
let head = buildLinkedList([1,2]);
makeCycle(head, -1);    // now there is a cycle: -4 -> 2
console.log(LinkedListCycle(head)); // false


// Time complexicity is O(n)
