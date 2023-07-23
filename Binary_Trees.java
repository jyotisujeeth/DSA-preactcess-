**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (number) {

  // If a number is even, we can not construct a perfect binary tree so we return blank tree
  if (number % 2 == 0) {
    return [];
  }
  
  // The idea is that perfect binary tree of 1 i.e. PBT(1) is a single node without left and right nodes. 
  // A perfect binary tree of 3 is :
  // - a node with left = PBT(1) and right = PBT(1)
  // A perfect binary tree of 5 is : 
  // - a node with left = PBT(3) and right = PBT(1)
  // - a node with left = PBT(1) and right = PBT(3)
  // A perfect binary tree of 7 is : 
  // - a node with left = PBT(5) and right = PBT(1)
  // - a node with left = PBT(3) and right = PBT(3)
  // - a node with left = PBT(1) and right = PBT(5)
  // and so on...

  // So if you observe, we need PBT of a number more than one time in recursion
  // SO we use memoization to speed up the re-calculations
  var memo = new Array(number + 1).fill(null).map((i) => []);

  let helper = (n) => {
    // If the value is already memoized, return it
    if (memo[n].length > 0) {
      return memo[n];
    }

    // Base case
    if (n == 1) {
      return [new TreeNode(0)];
    }

    // Initialize perfect binary trees to empty array
    var trees = [];

    // Now find all odd pairs of from 1 to n-1(n - 1  because we will take out one node as the root node)
    for (let i = 1; i < n - 1; i += 2) {
      let lt = helper(i);
      let rt = helper(n - 1 - i);

      // Now get all possible perfect binary trees of left tree and right tree
      lt.forEach((ltr) => {
        rt.forEach((rtr) => {
          // Make a new tree
          trees.push(new TreeNode(0, ltr, rtr));
        });
      });
    }

    memo[n] = trees;
    return memo[n];
  };

  return helper(number);
};
