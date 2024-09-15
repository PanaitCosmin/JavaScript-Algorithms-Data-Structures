// LINK: https://leetcode.com/problems/valid-parentheses/description/

/**
 * 
 * @param {string} s 
 * @returns {boolean}
 */
function isvalidParentheses(s) {
    // Initialize a Map to store pairs of closing and opening parentheses
    const parentheses = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ])
    // Initialize an array to keep track of opening parentheses encountered
    const stack = []

    // Loop through every parenthese
    for (let char of s) {
        // Check for opened parenthese
        if (!parentheses.has(char)) {
            stack.push(char)
            continue
        }
        
        // For closed parenthese
        if (stack[stack.length - 1] === parentheses.get(char)) {
            stack.pop()
            continue
        }
        
        // Closed parenthese without pair founds
        return false
    }

    // Check if there are any parentheses left
    return (stack.length === 0)
}

module.exports = isvalidParentheses