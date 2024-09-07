const threeSum = require("../../src/two-pointers/three_sum");

test("should return correct combinations for an array with positive and negative numbers", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(
    [[-1, -1, 2], 
    [-1, 0, 1]]
    );

  expect(threeSum([-5, -4, -1, 1, 2, 3])).toEqual(
    [[-5, 2, 3],
     [-4, 1, 3]]
    );

  expect(threeSum([-2, -1, -1, 0, 1, 1, 2])).toEqual(
    [[-2, 0, 2],
    [-2, 1, 1],
    [-1, -1, 2],
    [-1, 0, 1]]
  );
});

test("should return an empty array", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
  expect(threeSum([2, 3, 4])).toEqual([]);
});

test("should return correct combinations for an array with only zeros", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
})