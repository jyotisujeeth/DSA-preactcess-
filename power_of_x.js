function binaryExp(x, n) {
    // Base case, to stop recursive calls.
    if (n === 0) {
        return 1;
    }

    // Handle case where, n < 0.
    if (n < 0) {
        return 1 / binaryExp(x, -1 * n);
    }

    // Perform Binary Exponentiation.
    // If 'n' is odd we perform Binary Exponentiation on 'n - 1' and multiply result with 'x'.
    if (n % 2 === 1) {
        return x * binaryExp(x * x, (n - 1) / 2);
    }
    // Otherwise we calculate result by performing Binary Exponentiation on 'n'.
    else {
        return binaryExp(x * x, n / 2);
    }
}

var myPow = function(x, n) {
    return binaryExp(x, n)
};
