// LINK: https://leetcode.com/problems/3sum/description/

/**
 * 
 * @param {number[]} nums 
 * @returns {number[][]}
 */
function threeSum(nums) {
    // Sorting the array
    nums = nums.sort((a, b) => a - b)
    // Save the combinations
    const res = []

    // Calculate possibles solutions starting with the most left element
    for(let i = 0; i < nums.length; i++) {
        // Ignore the numbers already visited
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // Initialize two pointers for the first and the last index of the sequence
        let left = i + 1, right = nums.length - 1

        while (left < right) {
            // Calculate the sum of the 3 potential numbers
            const sum = nums[i] + nums[left] + nums[right]

            // Move left if the sum is less than 0 or move right if the sum is bigger than 0
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                // Store valid combination
                res.push([nums[i], nums[left], nums[right]])
                // Move left pointer to the next number
                left++
                // Move pointer if the new numbers is the same as the previous
                while (nums[left] === nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    } 

    return res
}

module.exports = threeSum
