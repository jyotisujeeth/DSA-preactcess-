/*
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/
**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let row = searchRows(matrix, target);
    if (row < 0) {
        return false;
    }
    let column = searchColums(matrix, target, row);
    return column >= 0;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
function searchRows(matrix, target) {
    let up = 0;
    let down = matrix.length - 1;

    while (up <= down) {
        let mid = up + Math.floor((down - up) / 2);
        if (matrix[mid][0] === target) {
            return mid;
        }

        if (matrix[mid][0] < target) {
            up = mid + 1;
        } else {
            down = mid - 1;
        }
    }
    return down;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @param {number} row
 * @return {number}
 */
function searchColums(matrix, target, row) {
    let left = 0;
    let right = matrix[0].length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (matrix[row][mid] === target) {
            return mid;
        }

        if (matrix[row][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
