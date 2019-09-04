/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * Leet Code:2
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

// step 1: loop through both at the same time , check if not both of them are in equal lenght
// step 2: how do I enhance a list

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0)
  let p = l1
  let q = l2
  let carry = 0;
  let node = head
  while(p || q){
    let x = p ? p.val : 0
    let y = q ? q.val : 0
    let sum = x + y + carry
    node.next = new ListNode((sum % 10))
    node = node.next
    carry = Math.floor(sum/10)
    if(p) p = p.next
    if(q) q = q.next
  } 
  if(carry) node.next = new Node(carry)
  return head.next
};







let l1 = new ListNode(2)
l1.next= new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
//l2.next.next = new ListNode(4)

addTwoNumbers(l1,l2)