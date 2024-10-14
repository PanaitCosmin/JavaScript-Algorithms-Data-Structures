const removeDuplicates = require('../../src/stack/remove_duplicate_sorted')

test('should return the number of unique elements in array', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2)
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
    expect(removeDuplicates([-100, -100, -80, -80, -80, 2, 2, 2, 3, 4, 4, 5])).toBe(6)
})