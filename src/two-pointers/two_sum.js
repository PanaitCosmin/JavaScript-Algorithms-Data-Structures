// LINK: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
function twoSum(nums, target) {
    // Initialize two pointers for the first and last number in the array
    let left = 0, right = nums.length - 1

    while (left < right) {
        // Calculate the sum of potential solution
        const sum = nums[left] + nums[right]

        // Move the left index to the right if the sum is lower then the target 
        if (sum < target) {
            left++
        } else if (sum > target) { // Move the right index to the left if the sum is higher then the target 
            right--
        } else { // indices found 
            return [left + 1, right + 1]
        }
    }
}

module.exports = twoSum