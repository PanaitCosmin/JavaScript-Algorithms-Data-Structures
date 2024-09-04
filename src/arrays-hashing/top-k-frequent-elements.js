// LINK: https://leetcode.com/problems/top-k-frequent-elements/description/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * 
 * @param {number[]} nums - The array of integers.
 * @param {number} k  - The number of top k frequent elements.
 * @returns {number[]} - The `k` most frequent elements in `nums`
 */
function topKFrequent(nums, k) {
    // Initialize a Map to store the number of occurrences for each number
    const countNumbers = new Map()
    // Initialize an Array where index represents frequency and value is a list of numbers with that frequency
    const arr = new Array(nums.length + 1).fill().map(() => []);
    // Initalize an Array to store the final result
    const output = []

    // Populate the frequency map with the count of each number in `nums`
    nums.forEach((num) => {
        const count = countNumbers.get(num) || 0
        countNumbers.set(num, count + 1)
    })

    // Store each number in the `arr` based on its frequency
    for (let [num, occurrences] of countNumbers) {
        arr[occurrences].push(num)
    }

    // Iterate in reverse order in arr to find the top k freq. elements
    for (let i = arr.length - 1; i >= 0; i--) {
        if (k < 0) break
        if (arr[i]) {
            for (let num of arr[i]) {
                if (k < 1) break
                output.push(num)
                k--
            }
        }
    }

    return output
}

module.exports = topKFrequent
