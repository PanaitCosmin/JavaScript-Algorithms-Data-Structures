const twoSum = require('../../src/two-pointers/two_sum')

test('should return correct indices for an array with positive numbers', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
    expect(twoSum([5, 6], 11)).toEqual([1, 2])
})

test('should return correct indices for an array with negative numbers', () => {
    expect(twoSum([-2, -1, 0, 1, 2], -1)).toEqual([1, 4])
    expect(twoSum([-1, 0, 4, 5], 4)).toEqual([1, 4])
    expect(twoSum([-1, 0], -1)).toEqual([1, 2])
})