const maxArea = require('../../src/two-pointers/container_most_water')

test('should return correct max area of water for an array ', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(maxArea([3, 5, 6, 2, 7, 8, 2, 1])).toBe(20)
})

test('should return correct max area of water of an array with two heights', () => {
    expect(maxArea([1, 1])).toBe(1)
    expect(maxArea([4, 5])).toBe(4)
})