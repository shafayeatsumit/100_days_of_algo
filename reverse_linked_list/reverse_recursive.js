class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseRecursive(node,n) {    
  if(node.next === null) {
    n = node    
    return
  }
  reverseRecursive(node.next, n)
  let previous = node.next
  previous.next = node
  node.next = null

  return n
}

function reverse (head){
  let nextHead  = null;
  reverseRecursive(head, nextHead)
  return nextHead
}

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

let result = reverse(head)
console.log(result)


// function reverse(head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   let tmp = reverse(head.next);
//   head.next.next = head;
//   head.next = undefined;
//   return tmp;
// }