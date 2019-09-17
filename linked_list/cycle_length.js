class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function (head) {
  let fast = head,
    slow = head;
  let len = 0;
  // fast != null covers empty linked list condition
  // if fast.next is not null then we don't get error in fast.next.next
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      if(len === 0){
        len++;
        continue
      }else{
        return len
      }
      
    }
    if(len>0) len++
  }
  return false
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)