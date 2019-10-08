class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  get_list() {    
    let result = "";
    
    let temp = this;
    while (temp !== null) {
      result += temp.val + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse_sub_list = function (head, m, n) {
  if(!head || !head.next) return head
  if(m===n) return head
  let count = 1,
  left = null,
  right = null;
  let node = head
  while(node){
    if(count === m-1){
      left = node
    }
    if(count === n){
      right = node.next
      node.next = null
      break
    }
    node = node.next
    count += 1;
  }  
  let prev = right,
  curr = left  ? left.next : null
  
  while(curr){
    let nextNode = curr.next
    curr.next = prev
    prev = curr 
    curr = nextNode
  }
  if (left){
    left.next = null
    left.next = prev
  } 
  
  
  return left || head;
};


head = new Node(1)
head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 1, 2).get_list()}`)
