/*
Input: n = 3,
goal = 3,
k = 1
Output: 6
Explanation: There are 6 possible playlists: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1].
*/

var numMusicPlaylists = function(n, goal, k) {
    const m = 1e9 + 7;
    let dp = Array.from({length: 2}, () => new Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        dp[i%2][0] = 0;
        for (let j = 1; j <= Math.min(i, n); j++) {
            dp[i%2][j] = dp[(i - 1)%2][j - 1] * (n - (j - 1)) % m;
            if (j > k)
                dp[i%2][j] = (dp[i%2][j] + dp[(i - 1)%2][j] * (j - k)) % m;
        }
    }

    return dp[goal%2][n];
};
