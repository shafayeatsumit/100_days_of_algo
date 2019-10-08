class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function (head) {
  let fast = head,
  slow = head;
  /**
   * fast != null covers empty linked list condition
   * fast !== null also covers if fast pointer runs out off element
   * 1-->2-->3-->4-->5-->6-->null here if fast is at 5
   * then fast.next.next would be null and it will throuw error at fast.next condition due to null.next
   * if fast.next is not null then we don't get error in fast.next.next
   */
  while (fast !== null && fast.next !== null){    
    slow = slow.next
    fast = fast.next.next
    if(fast === slow){      
      return true
    }
  }  
  return false
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)