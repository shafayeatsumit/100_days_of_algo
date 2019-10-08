class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  let slow = head,
  fast = head,
  loopLength = 0,  
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
    if(slow === fast){
      slow = slow.next
      loopLength += 1;
      break
    }
  }
  // find loop length
  while(fast !== slow){
    slow = slow.next
    loopLength += 1;
  }
  let result = findLoopHead(head,loopLength)
  return result;
};



function findLoopHead(head,loopLength){
  let p1 = head,
  p2 = head;
  for(let i=0;i<loopLength;i++){
    p2 = p2.next
  }
  while(true){
    if(p1===p2){
      return p1      
    }
    p1= p1.next
    p2 = p2.next
  }
  
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)