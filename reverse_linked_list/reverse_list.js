class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

const reverse = function (head) {
  if (head === null || head.next === null) {
    return head;
  }  
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

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();
