var combine = function (n, k) {
    if (n == 1 && k == 1) return [[1]];
    let out = [];
    const dfs = (currentSolution, startNumber, out) => {
        if (currentSolution.length == k) out.push(Array.from(currentSolution));
        for (let i = startNumber; i <= n; i++) {
            currentSolution.push(i);
            dfs(currentSolution, i + 1, out);
            currentSolution.pop();
        }
    }
    dfs([], 1, out);
    return out;
};
