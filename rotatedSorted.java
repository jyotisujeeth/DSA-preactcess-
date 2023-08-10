/*
nums = [2,5,6,0,0,1,2], target = 0
Output: true
*/
//Binary Search
// returns true if element `target` exists in the first sorted array.
private boolean existsInFirst(int[] arr, int start, int element) {
    return arr[start] <= element;
}

// returns true if we can reduce the search space in current binary search space
private boolean isBinarySearchHelpful(int[] arr, int left, int element) {
    return arr[left] != element;
}
/////////////////////////////////////
class Solution {
    public boolean search(int[] nums, int target) {
        int n = nums.length;
        if (n == 0) return false;
        int end = n - 1;
        int start = 0;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (nums[mid] == target) {
                return true;
            }

            if (!isBinarySearchHelpful(nums, start, nums[mid])) {
                start++;
                continue;
            }
            // which array does pivot belong to.
            boolean pivotArray = existsInFirst(nums, start, nums[mid]);

            // which array does target belong to.
            boolean targetArray = existsInFirst(nums, start, target);
            if (pivotArray ^ targetArray) { // If pivot and target exist in different sorted arrays, recall that xor is true when both operands are distinct
                if (pivotArray) {
                    start = mid + 1; // pivot in the first, target in the second
                } else {
                    end = mid - 1; // target in the first, pivot in the second
                }
            } else { // If pivot and target exist in same sorted array
                if (nums[mid] < target) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        return false;
    }

    // returns true if we can reduce the search space in current binary search space
    private boolean isBinarySearchHelpful(int[] arr, int start, int element) {
        return arr[start] != element;
    }

    // returns true if element exists in first array, false if it exists in second
    private boolean existsInFirst(int[] arr, int start, int element) {
        return arr[start] <= element;
    }
}
//////////////////////////////////////////////////////////////////////
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        """
        Cases to consider:
        4,1 target 4
        4,1 target 1
        1,4 target 4
        1,4 target 1
        """
        n = len(nums)
        left = 0
        right = n-1
        while left < right:
            mid = left + (right - left) // 2
            while left < mid and nums[left] == nums[mid]:
                left += 1
                mid = left + (right - left) // 2
            
            while mid < right and nums[mid] == nums[right]:
                right -= 1
                mid = left + (right - left) // 2

            if nums[mid] == target: return True
            elif nums[mid] < nums[right]:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid
            else:
                if nums[left] <= target and target <= nums[mid]:
                    right = mid
                else:
                    left = mid + 1

        if nums[left] == target: return True
        else: return False
