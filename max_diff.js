/*
Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.
Example 2:

Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.
*/
var minimizeMax = function (nums, p) {
  if (p === 0) return 0;
  let n = nums.length - 1;
  nums.sort((a, b) => a - b);
  let low = 0,
    high = nums[n] - nums[0];

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isValid(mid)) high = mid;
    else low = mid + 1;
  }
  return low;

  function isValid(max) {
    let i = 1,
      pairs = 0;

    while (i <= n) {
      if (nums[i] - nums[i - 1] <= max) {
        pairs++;
        i = i + 2;
      } else {
        i++;
      }
      if (pairs == p) return true;
    }
    return false;
  }
};
