//Number of Music Playlists
class Solution {
    public int numMusicPlaylists(int n, int goal, int k) {
        int MOD = 1_000_000_007;

        // Initialize the DP table
        long[][] dp = new long[goal + 1][n + 1];
        dp[0][0] = 1;

        for (int i = 1; i <= goal; i++) {
            for (int j = 1; j <= Math.min(i, n); j++) {
                // The i-th song is a new song
                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
                // The i-th song is a song we have played before
                if (j > k) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
                }
            }
        }

        return (int) dp[goal][n];
    }

}


//Top-down Dynamic Programming (Memoization)
public class Solution {
    private final int MOD = 1_000_000_007;
    private Long[][] dp;

    public int numMusicPlaylists(int n, int goal, int k) {
        dp = new Long[goal + 1][n + 1];
        for(Long[] row : dp) {
            Arrays.fill(row, -1L);
        }
        return (int) (numberOfPlaylists(goal, n, k, n));
    }

    private long numberOfPlaylists(int i, int j, int k, int n) {
        // Base cases
        if (i == 0 && j == 0) {
            return 1;
        }
        if (i == 0 || j == 0) {
            return 0;
        }
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        // DP transition: add a new song or replay an old one
        dp[i][j] = (numberOfPlaylists(i - 1, j - 1, k, n) * (n - j + 1)) % MOD;
        if (j > k) {
            dp[i][j] += (numberOfPlaylists(i - 1, j, k, n) * (j - k)) % MOD;
            dp[i][j] %= MOD;
        }
        return dp[i][j];
    }
}
//Combinatorics
public class Solution {
    private static final long MOD = 1_000_000_007;

    // Pre-calculated factorials and inverse factorials
    private long[] factorial;
    private long[] invFactorial;

    // Main method: calculates number of playlists
    public int numMusicPlaylists(int n, int goal, int k) {
        // Pre-calculate factorials and inverse factorials
        precalculateFactorials(n);

        // Initialize variables for calculation
        int sign = 1;
        long answer = 0;

        // Loop from 'n' down to 'k'
        for (int i = n; i >= k; i--) {
            // Calculate temporary result for this iteration
            long temp = power(i - k, goal - k);
            temp = (temp * invFactorial[n - i]) % MOD;
            temp = (temp * invFactorial[i - k]) % MOD;

            // Add or subtract temporary result to/from answer
            answer = (answer + sign * temp + MOD) % MOD;

            // Flip sign for next iteration
            sign *= -1;
        }

        // Final result is n! * answer, all under modulo
        return (int) ((factorial[n] * answer) % MOD);
    }

    // Method to pre-calculate factorials and inverse factorials up to 'n'
    private void precalculateFactorials(int n) {
        factorial = new long[n + 1];
        invFactorial = new long[n + 1];
        factorial[0] = invFactorial[0] = 1;

        // Calculate factorials and inverse factorials for each number up to 'n'
        for (int i = 1; i <= n; i++) {
            factorial[i] = (factorial[i - 1] * i) % MOD;
            // Inverse factorial calculated using Fermat's Little Theorem
            invFactorial[i] = power(factorial[i], (int) (MOD - 2));
        }
    }

    // Method to calculate power of a number under modulo using binary exponentiation
    private long power(long base, int exponent) {
        long result = 1L;

        // Loop until exponent is not zero
        while (exponent > 0) {
            // If exponent is odd, multiply result with base
            if ((exponent & 1) == 1) {
                result = (result * base) % MOD;
            }
            // Divide the exponent by 2 and square the base
            exponent >>= 1;
            base = (base * base) % MOD;
        }

        return result;
    }
}




