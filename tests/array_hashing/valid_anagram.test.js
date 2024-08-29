const isAnagram = require('../../src/arrays-hashing/valid-anagram');

describe('isAnagram', () => {

    test('should return true for valid anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
        expect(isAnagram('triangle', 'integral')).toBe(true);
        expect(isAnagram('a gentleman', 'elegant man')).toBe(true); // Handles spaces
    });

    test('should return false for invalid anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('test', 'pest')).toBe(false); // Different characters
    });

    test('should return false if strings have different lengths', () => {
        expect(isAnagram('hello', 'helloo')).toBe(false);
        expect(isAnagram('abcd', 'abc')).toBe(false);
    });

    test('should return true for single character strings', () => {
        expect(isAnagram('a', 'a')).toBe(true);
        expect(isAnagram('z', 'z')).toBe(true);
    });

    test('should return false for single character strings with different characters', () => {
        expect(isAnagram('a', 'b')).toBe(false);
        expect(isAnagram('x', 'y')).toBe(false);
    });

    test('should return true for empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    test('should return false for one empty string', () => {
        expect(isAnagram('a', '')).toBe(false);
        expect(isAnagram('', 'a')).toBe(false);
    });

    test('should return true for valid anagrams with special characters', () => {
        expect(isAnagram('a!b@c#', '#b@c!a')).toBe(true);
        expect(isAnagram('123', '321')).toBe(true);
    });

    test('should return false for invalid anagrams with special characters', () => {
        expect(isAnagram('a!b@c#', '#b@c!!a')).toBe(false);
        expect(isAnagram('1234', '321')).toBe(false);
    });

});
