class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findLength(slow){
  let count = 1,
  node = slow.next;
  while(node!==slow){
    node = node.next
    count +=1    
  }
  return count
}

const cycleLength = function (head) {
  let fast = head,
    slow = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow===fast){
      return findLength(slow)
    }
  }
  return 0
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${cycleLength(head)}`)


head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${cycleLength(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${cycleLength(head)}`)