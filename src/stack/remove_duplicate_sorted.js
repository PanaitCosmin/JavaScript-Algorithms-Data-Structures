// LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums) {
    let i = 1 // Current number of uniques numbers

    // Iterate through every number except the first one
    for (let j = 1; j < nums.length; j++) {
        // Compare the current number with the last unique number
        if (nums[j] !== nums[i - 1]) {
            // Replace seened value with the unique value
            nums[i] = nums[j]
            i++
        }
    }
    
    return i
}

module.exports = removeDuplicates