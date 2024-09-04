const topKFrequent = require('../../src/arrays-hashing/top-k-frequent-elements')

test('should return the correct elements for a sorted array', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    expect(topKFrequent([1, 2, 2, 2, 2, 3, 3, 4, 4, 4], 3)).toEqual([2, 4, 3])
    expect(topKFrequent([3, 2, 2, 1, 1, 1], 2)).toEqual([1, 2])
})

test('should return the correct elements for an unsorted array', () => {
    expect(topKFrequent([3, 0, 1, 0], 1)).toEqual([0])
    expect(topKFrequent([5, 2, 0, 2, 3, 5, 1, 2], 2)).toEqual([2, 5])
    expect(topKFrequent([2, 1, 3, 1, 3, 1, 3, 1, 3, 1], 2)).toEqual([1, 3])
})

test('should return the correct elements for an array wiht a single element', () => {
    expect(topKFrequent([1], 1)).toEqual([1])
    expect(topKFrequent([2], 2)).toEqual([2])
    expect(topKFrequent([5], 5)).toEqual([5])
})

