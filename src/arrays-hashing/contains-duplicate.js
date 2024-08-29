// LINK: https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 

/**
 * Checks if an array contains any duplicate elements.
 *
 * @param {Array} arr - The array to check for duplicates.
 * @returns {boolean} - Returns true if a duplicate is found, otherwise false.
 */

function duplicate(arr) {
    // Initialize a Set and store unique elements encountered
    const nums = new Set()

    // Iterate through each element in the array
    for(let num of arr) {
        // A duplicate is found if the element is in Set
        if(nums.has(num)) {
            return true
        } else {
            // Add the uncheck element in the Set
            nums.add(num)
        }
    }

    // No duplicates found
    return false
}

module.exports = duplicate