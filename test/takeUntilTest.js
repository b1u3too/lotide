const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should from the beginning of the array until the callback passes, excluding the element that passed", () => {
    assert.deepEqual(takeUntil([1,6,5,1,3,4], num => num % 5 === 0),[1,6]);
    assert.deepEqual(takeUntil(['a','b','c','d','e','g','f', 'lighthouse'], str => str.includes('h')),['a','b','c','d','e','g','f']);
  });
});