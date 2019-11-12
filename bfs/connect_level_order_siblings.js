/**
 * leet code problem 116
 * You are given a perfect binary tree where all leaves are on the same level, 
 * and every parent has two children.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function (root) {
  if (root === null) {
    return root;
  }
  let Q = [root];
  while (Q.length) {
    let levelSize = Q.length,
      prev = null;
    for (let i = 0; i < levelSize; i++) {
      let node = Q.shift();
      if (prev) prev.next = node
      prev = node;
      if (node.left) Q.push(node.left)
      if (node.right) Q.push(node.right)
    }
  }
  return root;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()