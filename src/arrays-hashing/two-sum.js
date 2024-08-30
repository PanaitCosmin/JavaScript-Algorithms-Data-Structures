// LINK: https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice

/**
 * Returns the indices of the two numbers in the given array that add up to the specified target.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */

function twoSum(nums, target) {
    // Initialize a Map to store the numbers and their indices
    const map = new Map()

    // Store the first number and index
    map.set(nums[0], 0)

    // Iterate through rest of the numbers
    for(let i = 1; i < nums.length; i++) {
        // Calculate the difference needed to reach the target
        const diff = target - nums[i]

        // Difference exists in map, return indices
        if (map.has(diff)) {
            return [map.get(diff), i]
        }

        // Difference not found in map, and current number and index
        map.set(nums[i], i)
    }
}

module.exports = twoSum

console.log(twoSum([4, 4, 4, 3, 3, 3], 7))