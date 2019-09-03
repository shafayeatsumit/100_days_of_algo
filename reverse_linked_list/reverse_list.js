class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const reverse = function (head) {
  // TODO: Write your code here
  let node = head
  let prev = null;
  while(node!==null){
    let next = node.next
    node.next = prev;
    prev = node;
    node = next;
  }  
  return prev;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
reverse(head)
// console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
// console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
