const groupAnagrams = require('../../src/arrays-hashing/group-anagrams')

// Helper function to sort arrays deeply
const deepSort = (array) => {
    return array.map(subArray => subArray.sort()).sort();
};

test('should group anagrams into subarrays', () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    
    expect(deepSort(result)).toEqual(deepSort(expected));
})

test('should handle empty string', () => {
    expect(groupAnagrams([""])).toEqual([[""]])
})

test('should handle single character string', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]])
    expect(groupAnagrams(["a", "b", "a", "b"])).toEqual([["a", "a"], ["b", "b"]])
})

