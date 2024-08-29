const duplicate = require('../../src/arrays-hashing/contains-duplicate');

test('should return true when array contains duplicates', () => {
    expect(duplicate([1, 2, 3, 4, 4])).toBe(true);
});

test('should return false when array does not contain duplicates', () => {
    expect(duplicate([1, 2, 3, 4, 5])).toBe(false);
});

test('should return true for an array with all elements the same', () => {
    expect(duplicate([1, 1, 1, 1])).toBe(true);
});

test('should return false for an empty array', () => {
    expect(duplicate([])).toBe(false);
});

test('should return true for an array with negative numbers and duplicates', () => {
    expect(duplicate([-1, -2, -3, -1])).toBe(true);
});

test('should return false for an array with negative numbers and no duplicates', () => {
    expect(duplicate([-1, -2, -3, -4])).toBe(false);
});
