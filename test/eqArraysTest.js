const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true only if elements and their order match for 1-D arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should match equality for 2D nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("should accurately check equality for 3D and higher nested arrays", () => {
    assert.strictEqual(eqArrays([1,2,[[[5]]]], [1,2,[[[5]]]]), true);
    assert.strictEqual(eqArrays([1,2,[[[[5]]]]], [[1,2,[[[[5]]]]]]), false);
    assert.strictEqual(eqArrays([1,2,[[[[5]]]]], [[1,2,[[[[3]]]]]]), false);
  });
});