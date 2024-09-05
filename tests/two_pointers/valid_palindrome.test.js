const isPalindrome = require('../../src/two-pointers/valid-palindrome')

test('should return true for a string with only alphanumeric characters', () => {
    expect(isPalindrome('level')).toBe(true)
    expect(isPalindrome('mom')).toBe(true)
    expect(isPalindrome('racecar')).toBe(true)
})

test('should return false for a string with only alphanumeric characters', () => {
    expect(isPalindrome('nooxn')).toBe(false)
    expect(isPalindrome('radarx')).toBe(false)
    expect(isPalindrome('xnun')).toBe(false)
})

test('should return true for a string with non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true)
    expect(isPalindrome('No \'x\' in Nixon')).toBe(true)
    expect(isPalindrome('Madam, in Eden, I\'m Adam')).toBe(true)
})

test('should return false for a string with non-alphanumeric characters', () => {
    expect(isPalindrome('F-12')).toBe(false)
    expect(isPalindrome('001B-D100')).toBe(false)
    expect(isPalindrome('f(bob)')).toBe(false)
})