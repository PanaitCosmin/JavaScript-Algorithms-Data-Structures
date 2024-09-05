// LINK: https://leetcode.com/problems/valid-palindrome/description/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * 
 * @param {string} s 
 * @returns {boolean}
 */
function isPalindrome(s) {
    // Helper function testing if the character is alphanumeric
    const isAlphanumeric = (char) => (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9")
    )
    
    // An empty string is a valid palindrome
    if (!s.length) return true
    
    // Initialize two pointers for the first and last character in the string
    let [left, right] = [0, s.length - 1]

    while (left <= right) {
        // Jump over  non-alphanumeric characters from the left
        if (!isAlphanumeric(s[left])) {
            left += 1
            continue
        }

        // Jump over non-alphanumeric characters from the right
        if (!isAlphanumeric(s[right])) {
            right -= 1
            continue
        }

        // Compare left side character and right side character
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    
        // Update pointers
        left += 1
        right -= 1
    }

    // Valid palindrome if the two pointers meet 
    return true 
}

module.exports = isPalindrome