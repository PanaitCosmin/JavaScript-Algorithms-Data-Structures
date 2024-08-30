const twoSum = require('../../src/arrays-hashing/two-sum')

test('should return indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test('should handle negative numbers correctly', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
    expect(twoSum([1, -2, 3, -4, 5], 1)).toEqual([1, 2])
    expect(twoSum([-6, -4, -5, 2, 1], -3)).toEqual([2, 3])
})

test('should return the correct indices when the target is zero', () => {
    expect(twoSum([0, 4, 1, 2, 0], 0)).toEqual([0, 4])
    expect(twoSum([1, 1, 0, 0, 1], 0)).toEqual([2, 3])
    expect(twoSum([5, 4, 0, 2, 0], 0)).toEqual([2, 4])
})
