// LINK: https://leetcode.com/problems/group-anagrams/description/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * Group together the words that are anagrams.
 * 
 * @param {string[]} strs 
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    /**
     * Generates a character frequency signature for a given word.
     * This signature can be used to group words that are anagrams.
     * 
     * @param {string} word - The word for which to generate the frequency signature.
     * @returns {string} - A string representing the frequency of each character in the word.
     */
    const codeChars = (word) => {
         // Initialize an Array where indices are associated with eng. characters 
    const freq = new Array(26).fill(0)

    // Iterate through characters of the word
    for (let char of word) {
        // Calculate the position of the current character in array
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)
        // Increment the number of appearance of the current character
        freq[charCode]++
    }

    // Return the number of appearance of each character as a string 
    return freq.toString()
    }

    // Return the array if it's empty
    if (!strs.length) return strs

    // Initialize a map to match the number of characters with their words
    const codeMap = new Map()

    // Iterate through words in the array
    for (let word of strs) {
        // Get the numbers of characters for the current word
        const codeWord = codeChars(word)
        // Get the array with the words of the current sequence of characters 
        const values = codeMap.get(codeWord) || []
        // Add new word for the sequence
        values.push(word)
        codeMap.set(codeWord, values)
    }

    // Return an array of all grouped anagrams
    return [...codeMap.values()]
}


module.exports = groupAnagrams 