// LINK: https://leetcode.com/problems/valid-anagram/

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * 
 * Checks if string "t" is an anagram of string "s"
 * 
 * @param {string} s - The first string
 * @param {string} t - The second string
 * @returns {boolean} - Returns true if t is an anagram of string "s"
 */


function isAnagram(s, t) {
    // Strings must have the same length to be anagram
    if (s.length !== t.length) return false

    // Initialize a Map to store and count the characters of "s"
    const characters = new Map()

    // Counting the characters in "s" string
    for (let char of s) {
        const val = (characters.get(char) || 0) + 1
        characters.set(char, val)
    }

    // Decrement the characters using "t" string 
    for (let char of t) {
        if (!characters.has(char)) return false
        const val= characters.get(char) - 1
        if (val < 0) return false // Strings doesn't have the same numbers of char. 
        characters.set(char, val)
    }

    // valid anagram
    return true
}

module.exports = isAnagram