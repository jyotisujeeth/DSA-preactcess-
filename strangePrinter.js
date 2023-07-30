
var strangePrinter = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i][j] = len;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
      }
      if (s[i] === s[j]) {
        dp[i][j]--;
      }
    }
  }
  return dp[0][n - 1];
};
