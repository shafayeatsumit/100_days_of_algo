class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findLength(slow) {
  let count = 1,
    node = slow.next;
  while (node !== slow) {
    node = node.next
    count += 1
  }
  return count
}

function findStart(head,length){
  let p1 = p2 =head;
  for(let i=0;i<length;i++){
    p1= p1.next
  }
  console.log(p1)
  while(p1!==p2){
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1
}

const find_cycle_start = function (head) {
  let fast = head,
    slow = head,
    cycleLength = 0;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycleLength = findLength(slow)
      break
    }
  }  
  return findStart(head, cycleLength)  
};






head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)