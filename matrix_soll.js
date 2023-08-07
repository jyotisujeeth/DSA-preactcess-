/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//** Brute force - O(mn)**
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === target) return true
        }
    }
    return false
 };


// **Binary search in each row - O(mlog n)**
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        let start = 0, end = matrix[0].length - 1

        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if(matrix[i][mid] === target) return true
            
            if(matrix[i][mid] > target) end = mid - 1
            else start = mid + 1
        }
    }
    return false
}

// ** Diagonal search from top right - O(m + n)**
var searchMatrix = function(matrix, target) {
    let j = matrix[0].length - 1, i = 0
    
    while(j >= 0 && i < matrix.length) {
        if(matrix[i][j] === target) return true
        
        if(matrix[i][j] > target) j--
        else i++
    }
    return false
}

//** Binary search complete matrix - O(log mn)**
var searchMatrix = function(matrix, target) {
  let start = 0, end = (matrix.length * matrix[0].length) - 1
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        let midNum = 
            matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length]
        
        if(midNum === target) return true    
        else if(midNum < target) start = mid + 1
        else end = mid - 1
    }
    return false
}
