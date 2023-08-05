var generateTrees = function(n) {
    if (n === 0) return [];
    if (n === 1) return [new TreeNode(1)];
    
    
    function clone(root) {
        if (root === null) return null;
        
        const copy = new TreeNode(root.val);
        copy.left = clone(root.left);
        copy.right = clone(root.right);
        
        return copy;
    }
    /**
    * dp[i][j] represents total trees possible from start position i and end position j;
    **/
    let dp = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(null).map(() => []));
    for (let i = 0; i <= n; i++) {
        dp[i][i] = [new TreeNode(i)];
        for (let j = 0; j < i; j++) {
            // If j < i only null tree is possible
            dp[i][j] = [null];
        }
    }
    
    for (let len = 2; len <= n; len++) {
        for (let j = len; j <= n; j++) {
            let i = j - len + 1;
            
            for (let k = i; k <= j; k++) {
                let leftTrees = (k > 0) ? dp[i][k - 1] : [null];
                let rightTrees = (k < n) ? dp[k + 1][j] : [null];
                
                for (let leftTree of leftTrees) {
                    for (let rightTree of rightTrees) {
                        const root = new TreeNode(k);
                        root.left = clone(leftTree);
                        root.right = clone(rightTree);
                        
                        dp[i][j].push(root);
                    }
                }
            }
        }
    }
    
    return dp[1][n];
};
