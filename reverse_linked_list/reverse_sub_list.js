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
  if(!head || !head.next || m===n) return head
  let count = 1,
  left = null, //last node of first part
  right = null; //next node from  last node of sublist
  let node = head

  while(node){
    if(count === m-1 ){
      left = node
      
    }
    if(count === n){
      right = node.next
      node.next = null      
    }
    node = node.next
    count = count +1
  }
  
  let current = left? left.next : head;  
  let prev = right;
  while(current){
    let next = current.next;
    current.next = prev
    prev = current
    current = next
  }
  
  if(left){
    left.next = prev
    prev = head
  }
  
  
  return  prev;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
reverse_sub_list(head, 3, 4)
// console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
// console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 1, 2).get_list()}`)
