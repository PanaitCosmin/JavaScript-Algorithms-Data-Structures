// LINK: https://leetcode.com/problems/container-with-most-water/description/

/**
 * 
 * @param {number[]} height 
 * @returns {number}
 */
function maxArea(height) {
    // Initialize the variable to store the maximum area found
    let res = 0
    // Initialize two pointers for the first and the last height
    let left = 0, right = height.length - 1

    // Loop until the two pointers meet
    while (left < right) {
        // Calculate the current area
        const area = (right - left) * Math.min(height[left], height[right])
        // Update the area if a bigger one is found
        res = Math.max(res, area)
        // Move to the next element with bigger height
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return res
}

module.exports = maxArea

