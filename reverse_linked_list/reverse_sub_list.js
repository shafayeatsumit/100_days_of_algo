class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * separate 3 part
 * left , middle(the one we need to reverse) , right 
 * left --> last node of the first part
 * find the last node of the middle part and set next to null lastofMiddle.next = null, so that we can use reverse forumla easily
 * 
 */
const reverse_sub_list = function (head, m, n) {
  if(!head || m===n) return head;
  let dummyHead = new Node(0) // starting with a dummy head so if m=1 it won't throw an error
  dummyHead.next = head
  let node = dummyHead,
  left = null,
  right = null,
  count = 0;
  while(node){    
    if(count === m-1){
      left = node      
    }
    if(count === n){
      right = node.next;
      node.next = null
      break;
    }
    count +=1;
    node = node.next;    
  }
  let curr = left.next,
  prev = right;
  while(curr){
    let temp = curr.next;
    curr.next = prev    
    prev = curr
    curr = temp
  }
  left.next = prev    
  return dummyHead.next  
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
reverse_sub_list(head, 2, 4)
